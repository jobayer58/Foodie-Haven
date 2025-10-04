import React from 'react';
import Navbar from '../Pages/Navbar';
import Banner from '../Pages/Banner';
import DiscountCafe from '../Pages/DiscountCafe';
import DeliciousFood from '../Pages/DeliciousFood';
import Testimonials from '../Pages/Testimonials';
import Footer from '../Pages/Footer';
import Delivered from '../Pages/Delivered';
import BurgerDiscount from '../Pages/BurgerDiscount';
import AboutFoods from '../Pages/AboutFoods';
import DiscountFood from '../Pages/DiscountFood';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DiscountCafe></DiscountCafe>
            <DeliciousFood></DeliciousFood>
            <BurgerDiscount></BurgerDiscount>
            <Delivered></Delivered>
            <Testimonials></Testimonials>
            <DiscountFood></DiscountFood>
            <AboutFoods></AboutFoods>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;