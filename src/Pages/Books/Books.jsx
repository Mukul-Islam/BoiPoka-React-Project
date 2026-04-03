import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
console.log(data)
    return (
        <div>
            <h1 className='text-center p-5 font-medium text-3xl'>Books</h1>
            
               <div className='grid grid-cols-3 gap-y-15'>
                 {
                    data.map((singleBook)=><Book 
                    key={singleBook.bookId}
                        singleBook={singleBook}
                    ></Book>)
                }
               </div>
          
        </div>
    );
};

export default Books;