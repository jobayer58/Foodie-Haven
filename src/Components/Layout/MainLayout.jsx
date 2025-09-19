import React from 'react';
import Navbar from '../Pages/Navbar';
import Banner from '../Pages/Banner';
import DiscountCafe from '../Pages/DiscountCafe';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscountCafe></DiscountCafe>
            
        </div>
    );
};

export default MainLayout;