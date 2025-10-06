import React from 'react';
import banner1 from '../../assets/images/banner-1.jpg'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'
import banner4 from '../../assets/images/banner-4.jpg'
import shape from '../../assets/images/shape-grey.png'
import shape2 from '../../assets/images/shape-grey.png'

const DiscountFood = () => {
    return (
        <div>
            <img src={shape} className='w-full transform -scale-y-100' alt="" />
            <div className='max-w-7xl mx-auto py-10 md:py-20 px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Left Big Banner */}
                    <div className="relative overflow-hidden group h-80 md:h-[440px] w-full">
                        <div
                            className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${banner1})` }}
                        ></div>
                        <div className="relative z-10 pl-4 md:pl-8 py-4 md:py-24 space-y-3">
                            <h1 className='text-2xl md:text-4xl text-white font-bold'>50% Off Now!</h1>
                            <p className='text-2xl md:text-3xl lg:text-4xll text-white font-bold'>Discount For Delicious <br /> Tasty Burgers!</p>
                            <p className='text-white text-sm md:text-base'>Sale off 50% only this week</p>
                            <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium  bg-[#FF8D29] hover:bg-black py-2 px-4 md:py-2.5 md:px-6 mt-2 md:mt-0 transition-colors duration-300">
                                <span className="relative w-full text-left text-white font-semibold">Order Now</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-rows-2 gap-3">
                        {/* Top Row */}
                        <div className="grid grid-cols-2 gap-3 h-40 md:h-[213px]">
                            <div className="relative overflow-hidden group w-full h-full">
                                <div
                                    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    style={{ backgroundImage: `url(${banner2})` }}
                                ></div>
                                <div className="relative z-10 p-2 md:p-4 space-y-1 md:space-y-3">
                                    <h1 className='text-lg md:text-2xl lg:text-4xl text-white font-bold'>Delicious <br /> Pizza</h1>
                                    <p className='text-white text-sm md:text-base'>50% off Now</p>
                                    <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium  bg-[#FF8D29] hover:bg-black py-1.5 px-3 md:py-2.5 md:px-6 mt-1 md:mt-0 transition-colors duration-300">
                                        <span className="relative w-full text-left text-white font-semibold">Order Now</span>
                                    </button>
                                </div>
                            </div>
                            <div className="relative overflow-hidden group w-full h-full">
                                <div
                                    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    style={{ backgroundImage: `url(${banner3})` }}
                                ></div>
                                <div className="relative z-10 p-2 md:p-4 space-y-1 md:space-y-3">
                                    <h1 className='text-lg md:text-2xl lg:text-4xl text-white font-bold'>American <br /> Burger</h1>
                                    <p className='text-white text-sm md:text-base'>50% off Now</p>
                                    <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium  bg-[#FF8D29] hover:bg-black py-1.5 px-3 md:py-2.5 md:px-6 mt-1 md:mt-0 transition-colors duration-300">
                                        <span className="relative w-full text-left text-white font-semibold">Order Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="relative overflow-hidden group w-full h-40 md:h-[213px] flex justify-end">
                            <div
                                className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                                style={{ backgroundImage: `url(${banner4})` }}
                            ></div>
                            <div className="relative z-10 py-2 md:py-4 pr-4 lg:pr-16 space-y-2 md:space-y-3 ">
                                <h1 className='text-lg md:text-2xl lg:text-4xl text-white font-bold'>Tasty Buzzed <br /> Pizza</h1>
                                <p className='text-white text-sm md:text-base'>Sale off 50% only this week</p>
                                <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium  bg-[#FF8D29] hover:bg-black py-1.5 px-3 md:py-2.5 md:px-6 mt-1 md:mt-0 transition-colors duration-300">
                                    <span className="relative w-full text-left text-white font-semibold">Order Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={shape2} className='w-full' alt="" />
        </div>
    );
};

export default DiscountFood;