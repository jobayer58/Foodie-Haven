import React from 'react';
import Navbar from '../Pages/Navbar';
import Banner from '../Pages/Banner';
import DiscountCafe from '../Pages/DiscountCafe';
import DeliciousFood from '../Pages/DeliciousFood';
import Testimonials from '../Pages/Testimonials';
import Footer from '../Pages/Footer';
import Delivered from '../Pages/Delivered';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscountCafe></DiscountCafe>
            <DeliciousFood></DeliciousFood>
            <Delivered></Delivered>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;