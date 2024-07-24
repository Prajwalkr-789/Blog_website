import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FixedSizeList} from 'react-window'

function Display() {
  const shimmera = [1, 2, 3, 4, 5, 6];

  const [isopen, setisopen] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const [shimmer, setshimmer] = useState(false);
  const [oid, setid] = useState(0);
  const [ccategory, setcatogary] = useState("All");
  const [dataa, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkmobile = () => {
      setisMobile(window.innerWidth < 800);
    };

    const fetchdata = async () => {
      
      try {
        const response = await axios.get('https://blog-web-api.vercel.app/blog/fetch');
        console.log("i++")
        if (response.status === 200) {
          const fetchedData = response.data;
          setdata(fetchedData);
          setshimmer(dataa.length === 0);
        } else {
          console.log("Something happened while fetching...");
        }
      } catch (error) {
        console.error(error);
        setshimmer(true)
      }
    };

    checkmobile();
    fetchdata();

    window.addEventListener('resize', checkmobile);
    return () => window.removeEventListener('resize', checkmobile);
  }, []);

  const checkmobile = () => {
    if (window.innerWidth < 800) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', checkmobile);
    return () => window.removeEventListener('resize', checkmobile);
  }, []);

  const idd =async (id) => {
      setid(id);
      const clickdata = await dataa.find((item) => item._id === id)
      navigate(`/disp/${id}`, { state: { dataFetched: true, data:  clickdata} });
    };

  return (
    <>

      
        <div className='p-10'>
          <h2 className='text-5xl font-bold text-green-500 flex justify-center mt-10'>Blogs</h2>
          

          <div className={` ${isMobile ?'mt-10':''} grid sm:p-1 md:p-10 lg:p-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20`}>
            {dataa.filter((res) => ccategory === "All" ? true : res.category === ccategory).map((res) => (
              <div key={res.id} onClick={() => {idd(res._id)}} className='bg-white shadow-xl shadow-gray-400 backdrop-blur-xl transition-transform duration-400 ease-in-out bg-opacity-95 bg p-4 hover:scale-105'>
                <div>
                  <img className='w-full' src={res.image} alt="Image of blog" />
                </div>
                <div>
                  <h1 className='text-xl font-bold text-blue-500'>{res?.title}</h1>
                  <h2 className='hover:cursor-pointer font-semibold'>{res.description.substring(0, 76)}...</h2>
                  <h2>Category: <span className='font-bold'>{res.category}</span></h2>
                  <h4 className='flex justify-end items-end text-xs font-semibold'>{res.author}</h4>
                  <h4 className='flex justify-end items-end text-xs font-semibold'>{res.date}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      

      {/* {
      shimmer && (
        <div className='grid sm:p-1 md:p-10 lg:p-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16'>
          {shimmera.map((res) => (
            <div key={res} className=''>
              <div className="card">
                <div className="shimmerBG media"></div>
                <div className="p-32">
                  <div className="shimmerBG title-line"></div>
                  <div className="shimmerBG title-line end"></div>
                  <div className="shimmerBG content-line m-t-24"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line end"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </>
  );
}

export default Display;
