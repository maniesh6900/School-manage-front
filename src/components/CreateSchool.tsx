import { useState } from 'react';
import axios from 'axios';

function CreateSchool() {

  const [data , setData ] = useState({
    name  : "",
    address  : "",
    latitude : 0,
    longitude : 0,
  });

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    console.log(data);
    const res = await axios.post("http://localhost:4000/api/v1/school/create", data);
    setData({
    name  : "",
    address  : "",
    latitude : 0,
    longitude : 0,
    });

    console.log(res.status);
  };


  return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
      <h1 
        className='text-2xl font-bold text-center text-green-700'
        >Create School</h1>
      <form method='post'
        className='flex flex-col gap-4 w-1/4 group group:p-4'
      >
        <input type="text" 
          name='name'
          placeholder='name'
          value={data.name}
          onChange={(e)=>setData({...data, [e.target.name] : e.target.value})}
          className='bg-gray-200 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300'
          />
        
        <input type="text" 
          name='address'
          placeholder='address'
          value={data.address}
          onChange={(e)=>setData({...data, [e.target.name] : e.target.value})}
          className='bg-gray-200 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300'
          />

        <input type="number" 
          name='latitude'
          placeholder ='latitude'
          value={data.latitude}
          onChange={(e)=>setData({...data, [e.target.name] : Number(e.target.value)})}
          className='bg-gray-200 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300'
          />

        <input type="number" 
          name='longitude'
          typeof='Number'
          placeholder='longitude'
          value={data.longitude}
          onChange={(e)=>setData({...data, [e.target.name] : Number(e.target.value)})}
          className='bg-gray-200 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300'
            />
      </form>
      <button type='submit' 
        title='button' 
        onClick={handleSubmit}
        className='bg-green-500 rounded-md p-2 text-white hover:bg-green-700 active:bg-green-900 focus:bg-green-700 focus:ring focus:ring-green-300 disabled:opacity-25 transition-all duration-200'
      >Submit</button>
    </div>
  );
}

export default CreateSchool;