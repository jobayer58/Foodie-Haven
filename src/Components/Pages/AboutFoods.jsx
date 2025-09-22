import React from 'react';
import blog1 from '../../assets/images/blog-1.jpg'
import blog2 from '../../assets/images/blog-2.jpg'
import blog3 from '../../assets/images/blog-3.jpg'
import { HiCalendarDateRange } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { FaArrowRightLong } from 'react-icons/fa6';

const AboutFoods = () => {
    return (
        <div className='bg-[#F9F6F0] '>
            <div className='max-w-7xl mx-auto py-18'>
                {/* text */}
                <div className='text-center space-y-5 py-10 px-2 lg:px-0'>
                    <h5 className='text-[#F42F25] text-xl font-bold'>Latest Blog Posts</h5>
                    <h1 className='style text-4xl font-extrabold'>This Is All About <span className='text-[#FF9D2E]'>Foods</span></h1>
                    <p className='text-[#787878]'>
                        Food is any substance consumed to provide nutritional <br className='hidden lg:block' />
                        support for an organism.
                    </p>
                </div>
                {/* card */}
                <div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 px-4  lg:px-0 gap-7'>
                    {/* 1 */}
                    <div className='col-span-4 h-[520px] bg-white'>
                        {/* image */}
                        <div className='relative '>
                            <img src={blog1} className='w-full h-[240px] object-cover' alt="" />
                            <button className='absolute top-5 right-5 bg-[#EB8314] text-white font-bold px-4 py-0.5'>PIZZA</button>
                        </div>
                        {/* content */}
                        <div>
                            <div className='space-y-4 lg:p-7 md:p-5 p-7'>
                                <div className='flex items-center gap-6 '>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <HiCalendarDateRange className='text-[#EB8314] text-base'></HiCalendarDateRange>
                                        <p className='font-bold text-sm'>JAN 01 2025</p>
                                    </div>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <CgProfile className='text-[#EB8314] text-base'></CgProfile>
                                        <p className='text-sm font-bold'>JONATHAN SMITH</p>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>What Do You Think About <br /> Cheese Pizza Recipes?</h1>
                                <p className='text-[#787878]'>Financial experts support or help you to to <br /> find out which way you can raise your funds <br /> more...</p>
                                <button className='flex items-center hover:text-[#EB8314] gap-2 font-bold text-xs'>READ MORE <FaArrowRightLong /></button>
                            </div>
                        </div>

                    </div>
                    {/* 2 */}
                    <div className='col-span-4 h-[520px] bg-white'>
                        {/* image */}
                        <div className='relative '>
                            <img src={blog2} className='w-full h-[240px] object-cover' alt="" />
                            <button className='absolute top-5 right-5 bg-[#EB8314] text-white font-bold px-4 py-0.5'>BURGER</button>
                        </div>
                        {/* content */}
                        <div>
                            <div className='space-y-4 lg:p-7 md:p-5 p-7'>
                                <div className='flex items-center gap-6 '>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <HiCalendarDateRange className='text-[#EB8314] text-base'></HiCalendarDateRange>
                                        <p className='font-bold text-sm'>JAN 01 2025</p>
                                    </div>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <CgProfile className='text-[#EB8314] text-base'></CgProfile>
                                        <p className='text-sm font-bold'>JONATHAN SMITH</p>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Making Chicken Strips With <br /> New Delicious Ingridents.</h1>
                                <p className='text-[#787878]'>Financial experts support or help you to to <br /> find out which way you can raise your funds <br /> more...</p>
                                <button className='flex items-center hover:text-[#EB8314] gap-2 font-bold text-xs'>READ MORE <FaArrowRightLong /></button>
                            </div>
                        </div>

                    </div>
                    {/* 3 */}
                    <div className='col-span-4 h-[520px] bg-white'>
                        {/* image */}
                        <div className='relative '>
                            <img src={blog3} className='w-full h-[240px] object-cover' alt="" />
                            <button className='absolute top-5 right-5 bg-[#EB8314] text-white font-bold px-4 py-0.5'>CHICKEN</button>
                        </div>
                        {/* content */}
                        <div>
                            <div className='space-y-4 lg:p-7 md:p-5 p-7'>
                                <div className='flex items-center gap-6 '>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <HiCalendarDateRange className='text-[#EB8314] text-base'></HiCalendarDateRange>
                                        <p className='font-bold text-sm'>JAN 01 2025</p>
                                    </div>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <CgProfile className='text-[#EB8314] text-base'></CgProfile>
                                        <p className='text-sm font-bold'>JONATHAN SMITH</p>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Innovative Hot Chessyraw<br /> Pasta Make Creator Fact.</h1>
                                <p className='text-[#787878]'>Financial experts support or help you to to <br /> find out which way you can raise your funds <br /> more...</p>
                                <button className='flex items-center hover:text-[#EB8314] gap-2 font-bold text-xs'>READ MORE <FaArrowRightLong /></button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutFoods;