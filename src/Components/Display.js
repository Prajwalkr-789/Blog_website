import React, { useEffect, useState } from 'react';
import data from '../utils/mockdata.json';
import Display_data from './Display_data';
import { Link, useNavigate } from 'react-router-dom';

function Display() {

  const [isopen, setisopen] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const [oid, setid] = useState(0);
  const [ccategory, setcatogary] = useState("All");
  // const history = useHistory();
  const nvigate = useNavigate()

  useEffect(()=>{
    checkmobile();
  },[])

  const checkmobile = () =>{
    if(window.innerWidth < 800){
      setisMobile(true)
    }
    else{
      setisMobile(false)
    }
  }
  window.addEventListener('resize',()=>{
    checkmobile()
  })


  const idd = (id) => {
    setid(id);
    nvigate(`/disp/${id}`,{state : data[id - 1]});
  }

  return (
    <div className='p-10'>
      <h2 className='text-5xl font-bold text-green-500 flex justify-center mt-10 '>Blogs</h2>
      <ul className={` w-6/12 ${isMobile?'hidden':'block'} flex flex-row flex-wrap justify-around items-center mx-auto mt-7`}>
        <li onClick={() => setcatogary("All")} className='text-md border bg-gray-400 mt-1 font-bold border-gray-400 w-fit px-4 py-2 rounded-2xl'>All</li>
        <li onClick={() => setcatogary("Web Development")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-200'>Web Development</li>
        <li onClick={() => setcatogary("Tools")} className='text-md mt-1 border border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-200'>Tools</li>
        <li onClick={() => setcatogary("Programming")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-200'>Programming</li>
        <li onClick={() => setcatogary("Web Design")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-200'>Web Design</li>
        <li onClick={() => setcatogary("Backend Development")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-200'>Backend Development</li>
      </ul>

      <div className={`flex flex-col ${isMobile?'block':'hidden'} justify-center items-center mt-5`}>
        <h2 onClick={()=>setdropdown(!dropdown)} className='hover:cursor-pointer font-semibold text-lg'>Category{dropdown?'⬆️':'⬇️'}</h2>
        <ul className={` w-6/12 ${dropdown?'block':'hidden'} rounded-lg p-2 flex flex-col text-center text-white justify-center items-center bg-gray-400`}>
      <li onClick={() => setcatogary("All")} className='text-md border bg-gray-400 mt-1 font-bold border-gray-400 w-fit px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-gray-600'>All</li>
        <li onClick={() => setcatogary("Web Development")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-500'>Web Development</li>
        <li onClick={() => setcatogary("Tools")} className='text-md mt-1 border border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-500'>Tools</li>
        <li onClick={() => setcatogary("Programming")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-500'>Programming</li>
        <li onClick={() => setcatogary("Web Design")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-500'>Web Design</li>
        <li onClick={() => setcatogary("Backend Development")} className='text-md border mt-1 border-gray-400 w-fit p-2 rounded-2xl font-semibold hover:cursor-pointer hover:bg-gray-500'>Backend Development</li>
      </ul>
      </div>
      
      
      <div className='grid  sm:p-1 md:p-10 lg:p-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16'>
        {
          data.filter((res) => ccategory == "All" ?true:  res.category === ccategory).map((res) => (
        <div key={res.id} onClick={() => {  idd(res.id) }} className='bg-white shadow-xl  shadow-gray-400 backdrop-blur-xl transition-transform duration-400 ease-in-out bg-opacity-95 bg p-4 hover:scale-105'>
              <div>
                <img className='w-full ' src={res.image} alt="Image of blog" />
              </div>
              <div>
                <h1 className='text-xl font-bold text-blue-500'>{res?.title}</h1>
                <h2 className='hover:cursor-pointer font-semibold'>{res.description.substring(0, 76)}...</h2>
                <h2>Category : <span className='font-bold'>{res.category}</span></h2>
                <h4 className='flex justify-end items-end text-xs font-semibold'>{res.author}</h4>
                <h4 className='flex justify-end items-end text-xs font-semibold'>{res.date}</h4>
              </div>
            </div>

          ))
        }
      </div>

      
    </div>
  )
}

export default Display;
