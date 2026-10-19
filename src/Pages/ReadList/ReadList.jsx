import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([])
    const [sort,setSort] = useState("");
    const data = useLoaderData()

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    }, [data])


    const handleSort = (type)=>{
        setSort(type)
        if(type === "pages"){
            const sortedByPage = [...readList].sort((a,b)=>a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if(type === "ratings"){
            const sortedByRatings = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByRatings);
        } 
    }
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click By:{sort?sort:""}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>handleSort("pages")}>Pages</a></li>
                    <li><a onClick={()=>handleSort("ratings")}>Ratings</a></li>
                </ul>
            </div>



            <Tabs>
                <TabList>
                    <Tab>Read BookList</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read-{readList.length}</h2>

                    {
                        readList.map(b => <Book
                            key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;