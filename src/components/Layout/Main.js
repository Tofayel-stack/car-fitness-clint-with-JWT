import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer';
import Header from '../SharedComponent/Header';

const Main = () => {
    return (
        <div className=''>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default Main;