import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div className='flex items-center justify-center h-24 mt-20 w-bg-gray-200 font-semibold text-3xl text-blue-800 hover:text-red-500 duration-500'>
            <Link to='/get'>
                Get the School Data
            </Link>
        </div>
        
        <div className='flex items-center justify-center h-24 w-screen font-semibold text-3xl text-blue-800 hover:text-red-500 duration-500'>
            <Link to='/create'>
                Create
            </Link>
        </div>
       
    </div>
  );
}

export default Home;