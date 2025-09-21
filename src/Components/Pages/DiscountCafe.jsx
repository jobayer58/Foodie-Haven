import React from 'react';
import shape from '../../assets/images/shape-white.png'
import drinkBurger from '../../assets/images/about-banner.png'
import sell from '../../assets/images/sale-shape-red.png'
import { FaCheck } from 'react-icons/fa';

const DiscountCafe = () => {
    return (
        <div>
            <img src={shape} className='w-full' alt="shape" />
            <div className='max-w-7xl mx-auto py-24 md:flex md:justify-around grid  gap-50'>
                {/* image */}
                <div className='md:py-20 lg:py-0'>
                    <img src={drinkBurger} alt="drinkBurger" className='absolute px-4 lg:px-0 md:w-4/8 lg:w-fit' />
                    <img src={sell} alt="sell" className='md:w-4/6 w-4/8 relative left-16 px-5 md:px-0' />
                </div>
                {/* text */}
                <div className='space-y-5 '>
                    <h1 className='lg:text-5xl text-2xl text-center md:text-start font-bold lg:leading-14'>Caferio, Burgers, and <br /> Best Pizzas <span className='text-[#FF9D2E]'>in Town!</span></h1>
                    <p className='text-[#787878] text-base text-center md:text-start px-4 md:px-0'>The restaurants in Hangzhou also catered to many northern Chinese who had <br className='hidden md:block' /> fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is <br className='hidden md:block' /> also known that many restaurants were run by families.</p>
                    <ul className='space-y-2 text-[#0D1216] text-base font-bold grid items-center justify-center md:justify-start'>
                        <li className='flex items-center gap-2'><FaCheck className='rounded-full text-xl p-1 text-white bg-[#FF9D2E] '></FaCheck> Delicious & Healthy Foods</li>
                        <li className='flex items-center gap-2'><FaCheck className='rounded-full text-xl p-1 text-white bg-[#FF9D2E] '></FaCheck> Spacific Family And Kids Zone</li>
                        <li className='flex items-center gap-2'><FaCheck className='rounded-full text-xl p-1 text-white bg-[#FF9D2E] '></FaCheck> Music & Other Facilities</li>
                        <li className='flex items-center gap-2'><FaCheck className='rounded-full text-xl p-1 text-white bg-[#FF9D2E] '></FaCheck> Fastest Food Home Delivery</li>
                    </ul>
                    <div className='flex justify-center items-center md:justify-start'>
                        <button class="btn  relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#FF8D29]  group py-2.5 px-9">
                            <span class="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span class="relative  w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white font-semibold">Order Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountCafe;