import React from 'react';
import banner from '../../assets/images/hero-bg.jpg'
import rightEnd from '../../assets/images/hero-bg-shape.png'
import rightEnd2 from '../../assets/images/hero-banner-bg.png'
import burger from '../../assets/images/hero-banner.png'

const Banner = () => {
    return (
        <div className=''>

            <div className='relative w-full h-screen bg-no-repeat'>
                <img
                    src={banner}
                    alt="Banner"
                    className="lg:w-full lg:h-full  object-cover bg-center"
                />
                <img
                    src={rightEnd}
                    alt="rightEnd"
                    className="absolute bottom-0 right-0 "
                />
                {/* text */}
                <div className='max-w-7xl mx-auto '>
                    <div className='absolute  bottom-1/4 space-y-8'>
                        <h1 className='text-[#FF8D29] text-4xl eat '>Eat Sleep and</h1>
                        <p className='text-7xl text-[#F1D6C6] -tracking-wider font-black'>Supper Delicious <br />Burger in Town</p>
                        <p className='text-[#E8CCBB] text-2xl'>Food is any substance consumed to provide nutritional <br /> support for an organism </p>
                        <button className='bg-[#FF9D2E] py-2.5 px-7 text-white hover:text-black hover:bg-white font-semibold'>Book a Table</button>
                    </div>
                </div>
                <img src={rightEnd2}
                    alt="right"
                    className="absolute w-3/5 -bottom-14  -right-28 " />
                <img src={burger}
                    alt="right"
                    className="absolute bottom-0 w-3/7 right-18 " />
            </div>
        </div>
    );
};

export default Banner;