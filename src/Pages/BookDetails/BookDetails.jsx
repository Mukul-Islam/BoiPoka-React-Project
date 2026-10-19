import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utility/addToDb';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();

    const singleBook = data.find(book=>book.bookId===bookId)
    console.log(singleBook)
    const {image,bookName,author,review,totalPages,rating,yearOfPublishing,tags,publisher,category} = singleBook
    // const {image} = data;

    const handleMarksRead = id =>{
        addToStoreDB(id)
    }
    return (
      <div className='flex  gap-4 my-5 '>
         <div className='flex-1 rounded-2xl bg-gray-100 p-25'>
            <img className='h-96' src={image} alt="" />
            
         </div>
         <div className='gap-4 flex-3'>
            <h1 className='text-3xl font-bold'>{bookName}</h1>
            <h1 className='font-semibold my-2'>By:{author}</h1>
            <div className='border-gray-300 border-t-2 border-solid mb-4'></div>
            <h1>{category}</h1>
            <div className='border-gray-300 border-t-2 border-solid mt-4'></div>
            <h1 className='mt-4'><span className='font-bold'>Review: </span>{review}</h1>
            <div className="flex justify-star items-start gap-20 p-6">
                <h1 className='font-bold text-xl'>Tags</h1>
                    {
                        tags.map(tag =><button className='rounded-2xl text-green-400 bg-green-100 py-1 px-3'>#{tag}</button>)
                    }
                </div>
                 <div className='border-t-2 border-gray-300 border-solid my-4'></div>
                <h1 className='text-gray-400'>Number of Pages: <span className='font-bold text-black'>{totalPages}</span></h1>
                <h1 className='text-gray-400'>Publisher: <span className='text-black font-bold'>{publisher}</span></h1>
                <h1 className='text-gray-400'>Year of Publishsing:  <span className='font-bold text-black'>{yearOfPublishing}</span></h1>
                <h1 className='text-gray-400'> Rating: <span className='font-bold text-black'>{rating}</span></h1>

            <button onClick={()=>handleMarksRead(bookId)} className='m-4 btn btn-accent'>Marks as Read</button>
            <button className='m-4 btn btn-info'>Whislist</button>
         </div>
      </div>
    );
};

export default BookDetails;