import React from 'react';
import dish1 from '../../assets/images/food-menu-1.png'
import dish2 from '../../assets/images/food-menu-2.png'
import dish3 from '../../assets/images/food-menu-3.png'
import dish4 from '../../assets/images/food-menu-4.png'
import dish5 from '../../assets/images/food-menu-5.png'
import dish6 from '../../assets/images/food-menu-6.png'

const DeliciousFood = () => {
    return (
        <div className='bg-[#F9F6F0]'>
            <div className=' max-w-7xl mx-auto py-20'>
                {/* text */}
                 <div className='text-center space-y-5 py-10'>
                    <h5 className='text-[#F42F25] text-xl font-bold'>Popular Dishes</h5>
                    <h1 className='style text-4xl font-extrabold'>Our Delicious <span className='text-[#FF9D2E]'>Foods</span></h1>
                    <p className='text-[#787878]'>
                        Food is any substance consumed to provide nutritional <br className='hidden lg:block' /> 
                        support for an organism.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4 items-center'>
                        <button className='bg-[#FF9D2E] text-white py-1 px-5 font-bold'>All</button>
                        <button className='bg-white py-1 px-5 font-bold'>Pizza</button>
                        <button className='bg-white py-1 px-5 font-bold'>Burger</button>
                        <button className='bg-white py-1 px-5 font-bold'>Drinks</button>
                        <button className='bg-white py-1 px-5 font-bold'>Sandwich</button>
                    </div>
                </div>

                {/* card */}
                <div className='grid md:grid-cols-8 lg:grid-cols-12 gap-8 px-6 lg:px-0'>
                    {/* 1st */}
                    <div className='col-span-4 bg-white h-[517px] shadow-md flex flex-col justify-center'>
                        <div className='mx-auto'>

                            {/* Image Wrapper with Hover */}
                            <div className='relative inline-block group'>
                                <img
                                    src={dish1}
                                    className='h-78 w-78 object-cover'
                                    alt="Fried Chicken"
                                />
                                {/* Absolute positioned badge */}
                                <p className='py-1 px-4 absolute top-2 left-2 bg-[#F42F25] font-bold text-white rounded'>
                                    -15%
                                </p>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#F42F25] text-white font-semibold py-2 px-6 rounded shadow hover:bg-[#FF8D29]  transition-all">
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className='space-y-2 py-1 mt-4'>
                                <div className='flex gap-5 items-center'>
                                    <h5 className='text-[#787878] font-bold'>Chicken</h5>
                                    <div className="flex text-[#FF9D2E] text-xl">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Fried Chicken Unlimited</h1>
                                <h3 className='text-[#F42F25] text-[18px] font-bold flex gap-2'>
                                    PRICE:
                                    <span className='text-[#FF9D2E]'>$49.00</span>
                                    <span className='text-[#BABABA] line-through'>$69.00</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* 2st */}
                    <div className='col-span-4 bg-white h-[517px] shadow-md flex flex-col justify-center'>
                        <div className='mx-auto'>

                            {/* Image Wrapper with Hover */}
                            <div className='relative inline-block group'>
                                <img
                                    src={dish2}
                                    className='h-78 w-78 object-cover'
                                    alt="Fried Chicken"
                                />
                                {/* Absolute positioned badge */}
                                <p className='py-1 px-4 absolute top-2 left-2 bg-[#F42F25] font-bold text-white rounded'>
                                    -10%
                                </p>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#F42F25] text-white font-semibold py-2 px-6 rounded shadow hover:bg-[#FF8D29]  transition-all">
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className='space-y-2 py-1 mt-4'>
                                <div className='flex gap-5 items-center'>
                                    <h5 className='text-[#787878] font-bold'>Noddler</h5>
                                    <div className="flex text-[#FF9D2E] text-xl">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Burger King Whopper</h1>
                                <h3 className='text-[#F42F25] text-[18px] font-bold flex gap-2'>
                                    PRICE:
                                    <span className='text-[#FF9D2E]'>$29.00</span>
                                    <span className='text-[#BABABA] line-through'>$39.00</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* 3st */}
                    <div className='col-span-4 bg-white h-[517px] shadow-md flex flex-col justify-center'>
                        <div className='mx-auto'>

                            {/* Image Wrapper with Hover */}
                            <div className='relative inline-block group'>
                                <img
                                    src={dish3}
                                    className='h-78 w-78 object-cover'
                                    alt="Fried Chicken"
                                />
                                {/* Absolute positioned badge */}
                                <p className='py-1 px-4 absolute top-2 left-2 bg-[#F42F25] font-bold text-white rounded'>
                                    -25%
                                </p>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#F42F25] text-white font-semibold py-2 px-6 rounded shadow hover:bg-[#FF8D29]  transition-all">
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className='space-y-2 py-1 mt-4'>
                                <div className='flex gap-5 items-center'>
                                    <h5 className='text-[#787878] font-bold'>Pizzas</h5>
                                    <div className="flex text-[#FF9D2E] text-xl">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>White Castle Pizzas</h1>
                                <h3 className='text-[#F42F25] text-[18px] font-bold flex gap-2'>
                                    PRICE:
                                    <span className='text-[#FF9D2E]'>$39.00</span>
                                    <span className='text-[#BABABA] line-through'>$49.00</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* 4st */}
                    <div className='col-span-4 bg-white h-[517px] shadow-md flex flex-col justify-center'>
                        <div className='mx-auto'>

                            {/* Image Wrapper with Hover */}
                            <div className='relative inline-block group'>
                                <img
                                    src={dish4}
                                    className='h-78 w-78 object-cover'
                                    alt="Fried Chicken"
                                />
                                {/* Absolute positioned badge */}
                                <p className='py-1 px-4 absolute top-2 left-2 bg-[#F42F25] font-bold text-white rounded'>
                                    -20%
                                </p>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#F42F25] text-white font-semibold py-2 px-6 rounded shadow hover:bg-[#FF8D29]  transition-all">
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className='space-y-2 py-1 mt-4'>
                                <div className='flex gap-5 items-center'>
                                    <h5 className='text-[#787878] font-bold'>Burrito</h5>
                                    <div className="flex text-[#FF9D2E] text-xl">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Bell Burrito Supreme</h1>
                                <h3 className='text-[#F42F25] text-[18px] font-bold flex gap-2'>
                                    PRICE:
                                    <span className='text-[#FF9D2E]'>$59.00</span>
                                    <span className='text-[#BABABA] line-through'>$69.00</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* 5st */}
                    <div className='col-span-4 bg-white h-[517px] shadow-md flex flex-col justify-center'>
                        <div className='mx-auto'>

                            {/* Image Wrapper with Hover */}
                            <div className='relative inline-block group'>
                                <img
                                    src={dish5}
                                    className='h-78 w-78 object-cover'
                                    alt="Fried Chicken"
                                />
                                {/* Absolute positioned badge */}
                                <p className='py-1 px-4 absolute top-2 left-2 bg-[#F42F25] font-bold text-white rounded'>
                                    -5%
                                </p>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#F42F25] text-white font-semibold py-2 px-6 rounded shadow hover:bg-[#FF8D29]  transition-all">
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className='space-y-2 py-1 mt-4'>
                                <div className='flex gap-5 items-center'>
                                    <h5 className='text-[#787878] font-bold'>Nuggets</h5>
                                    <div className="flex text-[#FF9D2E] text-xl">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Kung Pao Chicken BBQ</h1>
                                <h3 className='text-[#F42F25] text-[18px] font-bold flex gap-2'>
                                    PRICE:
                                    <span className='text-[#FF9D2E]'>$49.00</span>
                                    <span className='text-[#BABABA] line-through'>$69.00</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* 6st */}
                    <div className='col-span-4 bg-white h-[517px] shadow-md flex flex-col justify-center'>
                        <div className='mx-auto'>

                            {/* Image Wrapper with Hover */}
                            <div className='relative inline-block group'>
                                <img
                                    src={dish6}
                                    className='h-78 w-78 object-cover'
                                    alt="Fried Chicken"
                                />
                                {/* Absolute positioned badge */}
                                <p className='py-1 px-4 absolute top-2 left-2 bg-[#F42F25] font-bold text-white rounded'>
                                    -15%
                                </p>

                                {/* Hover Button */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#F42F25] text-white font-semibold py-2 px-6 rounded shadow hover:bg-[#FF8D29]  transition-all">
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className='space-y-2 py-1 mt-4'>
                                <div className='flex gap-5 items-center'>
                                    <h5 className='text-[#787878] font-bold'>Chicken</h5>
                                    <div className="flex text-[#FF9D2E] text-xl">
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                        <span>★</span>
                                    </div>
                                </div>
                                <h1 className='text-2xl font-bold'>Wendy's Chicken</h1>
                                <h3 className='text-[#F42F25] text-[18px] font-bold flex gap-2'>
                                    PRICE:
                                    <span className='text-[#FF9D2E]'>$49.00</span>
                                    <span className='text-[#BABABA] line-through'>$69.00</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DeliciousFood;