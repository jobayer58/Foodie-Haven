import React from 'react';
import avatar1 from '../../assets/images/avatar-1.jpg'
import avatar2 from '../../assets/images/avatar-2.jpg'
import avatar3 from '../../assets/images/avatar-3.jpg'

const Testimonials = () => {
    return (
        <div className='bg-[#F9F6F0] '>
            <div className='max-w-7xl mx-auto py-20'>
                {/* text */}
                <div className='text-center space-y-5 py-10'>
                    <h5 className='text-[#F42F25] text-xl font-bold'>Testimonials</h5>
                    <h1 className='style text-4xl font-extrabold'>Our Customers <span className='text-[#FF9D2E]'>Reviews</span></h1>
                    <p className='text-[#787878]'>
                        Food is any substance consumed to provide nutritional <br className='hidden lg:block' />
                        support for an organism.
                    </p>
                </div>
                {/* card */}
                <div className='grid md:grid-cols-6 lg:grid-cols-9 gap-5 px-4 lg:px-0'>
                    {/* 1st */}
                    <div className='col-span-3  bg-white '>
                        <div className="p-6 sm:p-10 lg:p-10  w-full h-auto  ">
                            <div className='flex justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <img
                                        src={avatar1}
                                        className='w-12 h-12 sm:w-18 sm:h-18 rounded-full object-cover'
                                        alt="img"
                                    />
                                    <div className='text-start'>
                                        <h1 className='font-bold text-sm sm:text-base lg:text-lg'>
                                            Rovert William
                                        </h1>
                                        <h1 className='text-xs sm:text-sm text-[#787878]'>CEO Kingfisher</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-start pt-6 sm:pt-8 text-xs sm:text-sm lg:text-base text-[#787878]'>
                                    "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
                                </p>
                                <div className="flex text-[#FF9D2E] text-xl ">
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 2st */}
                     <div className='col-span-3  bg-white '>
                        <div className="p-6 sm:p-10 lg:p-10  w-full h-auto  ">
                            <div className='flex justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <img
                                        src={avatar2}
                                        className='w-12 h-12 sm:w-18 sm:h-18 rounded-full object-cover'
                                        alt="img"
                                    />
                                    <div className='text-start'>
                                        <h1 className='font-bold text-sm sm:text-base lg:text-lg'>
                                            Thomas Josef
                                        </h1>
                                        <h1 className='text-xs sm:text-sm text-[#787878]'>CEO Getforce</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-start pt-6 sm:pt-8 text-xs sm:text-sm lg:text-base text-[#787878]'>
                                    "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
                                </p>
                                <div className="flex text-[#FF9D2E] text-xl ">
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 3st */}
                     <div className='col-span-3  bg-white '>
                        <div className="p-6 sm:p-10 lg:p-10  w-full h-auto  ">
                            <div className='flex justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <img
                                        src={avatar3}
                                        className='w-12 h-12 sm:w-18 sm:h-18 rounded-full object-cover'
                                        alt="img"
                                    />
                                    <div className='text-start'>
                                        <h1 className='font-bold text-sm sm:text-base lg:text-lg'>
                                            Charles Richard
                                        </h1>
                                        <h1 className='text-xs sm:text-sm text-[#787878]'>CEO Angela</h1>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-start pt-6 sm:pt-8 text-xs sm:text-sm lg:text-base text-[#787878]'>
                                    "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
                                </p>
                                <div className="flex text-[#FF9D2E] text-xl ">
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Testimonials;