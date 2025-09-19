import React from 'react';
import banner from '../../assets/images/hero-bg.jpg'
import rightEnd from '../../assets/images/hero-bg-shape.png'
import rightEnd2 from '../../assets/images/hero-banner-bg-edit.png'
import burger from '../../assets/images/hero-banner-edit.png'

const Banner = () => {
    return (
        <div>
            <div className='relative w-full h-[400px] md:h-[500px] lg:h-screen bg-no-repeat'>
                {/* banner bg image */}
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover bg-center"
                />

                {/* ====== Text Section ====== */}
                <div className='absolute inset-0 pt-12 lg:pt-0 flex flex-col items-center justify-center text-center md:items-start md:text-left md:justify-end md:max-w-7xl md:mx-auto lg:bottom-1/5 md:bottom-1/9 md:px-8 lg:px-2 space-y-4 md:space-y-8'>
                    <h1 className='text-[#FF8D29] text-2xl sm:text-3xl md:text-4xl eat'>
                        Eat Sleep and
                    </h1>

                    <p className='text-xl sm:text-2xl md:text-4xl lg:text-7xl text-[#F1D6C6] -tracking-wider font-black'>
                        Supper Delicious <br className='hidden md:block' /> Burger in Town
                    </p>

                    <p className='text-sm sm:text-base md:text-lg lg:text-2xl px-4 md:px-0 text-[#E8CCBB]'>
                        Food is any substance consumed to provide nutritional <br className='hidden md:block' /> support for an organism
                    </p>

                    <button className='bg-[#FF9D2E] py-2 px-5 sm:py-2.5 sm:px-7 text-white hover:text-black hover:bg-white font-semibold'>
                        Book a Table
                    </button>
                </div>

                {/* ====== Right Images (only md and up) ====== */}
                <img
                    src={rightEnd}
                    alt="rightEnd"
                    className="hidden md:block absolute bottom-0 right-0 h-1/2 md:h-full"
                />
                <img
                    src={rightEnd2}
                    alt="right"
                    className="hidden md:block absolute lg:w-1/2 md:w-96 md:bottom-10 lg:bottom-0 lg:h-[90%] object-cover right-0"
                />
                <img
                    src={burger}
                    alt="burger"
                    className="hidden md:block absolute md:bottom-10 lg:bottom-0 md:w-2/5 lg:right-28 md:right-8"
                />
            </div>
        </div>
    );
};

export default Banner;
