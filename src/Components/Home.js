import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import imga from '../utils/Untitled_design-removebg-preview.png'

const knowledgeSynonyms = ['Understanding', 'Comprehension', 'Wisdom', 'Cognition','Intelligence', 'Learning', 'Education', 'Expertise', 'Information', 'Proficiency'];


function Home() {
  
  const[i,seti] = useState(0);
  const[isMobile,setisMobile] = useState(false)

  useEffect(()=>{
    checkmobile()
    const inter= setInterval(()=>{
      seti((i) => (i+1) % knowledgeSynonyms.length)
    },2000)
  return () => clearInterval(inter)
  },[]) 

  const checkmobile = () =>{
    if(window.innerWidth < 600){
      setisMobile(true)
    }
    else{
      setisMobile(false)
    }
  }
  window.addEventListener('resize',()=>{
    checkmobile()
  })
  

  return (
    <div className='flex w-full justify-center items-center  h-screen'>
      <div className='flex w-full mt-20 flex-col md:flex-row justify-between items-center'>
        {/* Left Side Content */}
        <div className='text-center md:text-left sm:ml-2 lg:ml-32 mb-10 md:mb-0'>
          <h2 className='font-bold text-6xl text-blue-500'>Blog platform</h2>
          <h3 className='text-xl mt-2'>Create, read, edit Blogs...</h3>
          <h4 className='text-2xl font-medium mt-2'>
            A platform to enhance the{' '}
            <span className='transition-opacity text-lime-600 font-bold duration-1000 ease-in-out'>
              {knowledgeSynonyms[i]}
            </span>
          </h4>
          <Link to="/display">
            <button className='p-2 mt-4 bg-green-300 rounded-lg'>Get started</button>
          </Link>
        </div>
        {/* Right Side Image */}
        <div className='w-8/12 sm:w-5/12 md:w-4/12 sm:ml-10'>
          <img className={`${isMobile?'w-full':'w-8/12'} `} src={imga} alt="Blog platform illustration" />
        </div>
      </div>
    </div>
  )
}

export default Home
