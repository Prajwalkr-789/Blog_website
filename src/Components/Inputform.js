import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inputform() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const convertImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = () => {
      console.log("Error occurred while converting the image");
    };
  };

  useEffect(()=>{
    const authentication =async () =>{
      try {
        const res = await axios.get('https://blog-web-api.vercel.app/api/auth',{withCredentials:true})
      if(res.status === 200){
        // navigate('/create')
        setAuthenticated(true)
      }
      } catch (error) {
        navigate('/signin')
      }
    }
    authentication()
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title,
      image,
      description,
      category,
      content,
      author
    };
    try {
      const response = await axios.post('https://blog-web-api.vercel.app/blog/create', data,{withCredentials:true});
      if (response.status === 201) {
        navigate('/display');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {
      authenticated &&
      <div className='mt-20 p-6'>
      <p className='text-xl text-green-500 text-center font-bold mb-5'>Blog Entry</p>
      <h2 className='text-lg text-center font-bold mb-5'>Enter all the information about the blog</h2>
      <form className="max-w-md mx-auto backdrop-blur-lg bg-opacity-80 p-4 rounded-lg" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="author" id="author" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setAuthor(e.target.value)} />
          <label htmlFor="author" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setTitle(e.target.value)} />
          <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setCategory(e.target.value)} />
          <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setDescription(e.target.value)} />
          <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="file" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={convertImage} />
          <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea name="content" id="content" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setContent(e.target.value)} />
          <label htmlFor="content" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
    }
    
    </>
  );
}

export default Inputform;
