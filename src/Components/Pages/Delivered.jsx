import React from 'react';
import deliveryBanner from '../../assets/images/delivery-banner-bg.png'
import shape from '../../assets/images/shape-grey.png'
import deliveryBoy from '../../assets/images/delivery-boy.svg'
import { motion } from "framer-motion";


const Delivered = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto flex flex-col space-y-8 md:space-y-0 md:gap-0 md:flex-row items-center justify-between py-14 md:py-24 lg:py-32 px-4 md:px-6 lg:px-0 '>
                {/* text */}
                <div className='space-y-4 md:space-y-5 text-center md:text-left'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold style leading-snug'>
                        A Moments Of Delivered <br className='hidden lg:block' />
                        On  <span className='text-[#FF8D29]'><br className='hidden md:block lg:hidden' /> Right Time</span> & Place
                    </h1>
                    <p className='text-[#787878] text-sm md:text-base'>
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
                <div className="relative inline-block group mb-2 lg:mb-0">
                    {/* Delivery Banner */}
                    <img
                        src={deliveryBanner}
                        className='w-[300px] h-[260px] md:w-[470px] md:h-[300px] lg:w-[570px] lg:h-[490px] object-cover mx-auto'
                        alt="Delivery Banner"
                    />

                    {/* Delivery Boy - Positioned absolutely */}
                    <motion.img
                        animate={{ x: [20, 50, 20] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={deliveryBoy}
                        className='absolute bottom-0 -left-6 md:-left-10 lg:-left-14 w-[320px] md:w-[300px] lg:w-auto object-contain '
                        alt="Delivery Boy"
                    />
                </div>
            </div>
            <img src={shape} className='w-full' alt="" />
        </div>
    );
};

export default Delivered;
