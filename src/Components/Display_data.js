import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Display_data(props) {
  const [data, setData] = useState({}); 
  const { toggle } = props;
  const [isMobile, setisMobile] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    checkmobile()
    if (location.state) {
      setData(location.state); 
    }
  }, [location.state]); 

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

  console.log(data); 

  return (
    <div className='flex justify-center '>
      <div className={`${isMobile?'w-full mt-20':'w-8/12'}  mt-14`}>
      <h1 className='text-3xl mt-2 font-bold text-violet-500 text-center'>{data?.title}</h1>
        <div className='bg-white  backdrop-blur-xl bg-opacity-95 bg p-4'>
          <div>
            <img className='w-8/12 mx-auto rounded-lg' src={data?.image} alt="" />
          </div>
          <div className='leading-loose'>
            
            <h2 className='hover:cursor-pointer mt-2 text-lg font-semibold'>{data?.description}</h2>
            <h2 className='mt-2 text-red-500'>Category : <span className='font-bold '>{data?.category}</span></h2>
            <h3 className='leading-loose font-verdana mt-2'>{data?.content}</h3>
            <h4 className='flex justify-end items-end text-sm font-semibold'>{data?.author}</h4>
            <h4 className='flex justify-end items-end text-sm font-semibold'>{data?.date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display_data;
