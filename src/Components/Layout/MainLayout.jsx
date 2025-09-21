import React from 'react';
import Navbar from '../Pages/Navbar';
import Banner from '../Pages/Banner';
import DiscountCafe from '../Pages/DiscountCafe';
import DeliciousFood from '../Pages/DeliciousFood';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscountCafe></DiscountCafe>
            <DeliciousFood></DeliciousFood>
            
        </div>
    );
};

export default MainLayout;