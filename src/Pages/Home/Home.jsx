import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
// import '../../index.css'
// import './index.css'
const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;