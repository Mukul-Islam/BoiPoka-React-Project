import React from 'react';
import BookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-12 bg-[#F3F3F3]'>
            <div className=''>
                <h1 className='font-bold text-6xl p-10'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success ml-10'>View the list</button>
            </div>
            <div>
                <img className='w-10/12' src={BookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;