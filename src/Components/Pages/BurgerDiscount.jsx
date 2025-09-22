import React from 'react';
import burger from '../../assets/images/cta-banner-edit.png'
import sale from '../../assets/images/sale-shape.png'
import banner from '../../assets/images/hero-bg.jpg'
import shapeWhite from '../../assets/images/shape-white.png'
import shapeGray from '../../assets/images/shape-grey.png'
import { motion } from "framer-motion";



const BurgerDiscount = () => {
    return (
        <div className='bg-center' style={{ backgroundImage: `url(${banner})` }}>
            <img src={shapeGray} className='w-full transform -scale-y-100' alt="" />
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row py-10 md:py-0 px-4 lg:px-0 justify-between items-center ' >
                {/* text */}
                <div className='space-y-4 md:space-y-5 text-center md:text-left'>
                    <h1 className='text-2xl md:text-4xl text-white lg:text-5xl font-bold style leading-snug'>
                        The Foodie Have Excellent <br className='hidden lg:block' /> Of <span className='text-[#FF8D29]'> <br className='lg:hidden' />Quality Burgers!</span>
                    </h1>
                    <p className='text-[#DEDEDE] text-sm md:text-base'>
                        The restaurants in Hangzhou also catered to <br className='hidden md:block lg:hidden' /> many northern Chinese who had <br className='hidden lg:block' />
                        fled south <br className='hidden md:block lg:hidden' /> from Kaifeng during the Jurchen invasion of <br className='hidden md:block lg:hidden' /> the 1120s, while it is <br className='hidden lg:block' />
                        also known that many <br className='hidden md:block lg:hidden' /> restaurants were run by families.
                    </p>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#FF8D29] group py-2 px-6 md:py-2.5 md:px-9 text-sm md:text-base">
                        <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white font-semibold">Order Now</span>
                    </button>
                </div>

                {/* img */}
                <div className="relative inline-block group   ">
                    {/* burger Banner */}
                    <img
                        src={burger}
                        className=' object-cover mt-10 md:w-[450px] md:h-[360px] lg:w-[628px] lg:h-[586px] '
                        alt="burger Banner"
                    />

                    {/* Positioned absolutely */}
                    <motion.img
                        animate={{ scale: [1, 1.05, 1] }}   // ছোট-বড়-ছোট হবে
                        transition={{
                            duration: 3,   // এক cycle করতে সময়
                            repeat: Infinity,  // বারবার চলবে
                            ease: "easeInOut"  // মসৃণ effect
                        }}
                        src={sale}
                        className='absolute bottom-0 lg:w-54 md:w-32 w-25 top-16 left-3 object-contain '
                        alt="discount"
                    />
                </div>

            </div>
            <img src={shapeWhite} className='w-full' alt="" />
        </div>
    );
};

export default BurgerDiscount;