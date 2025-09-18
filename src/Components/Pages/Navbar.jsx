import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
     useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 border-b-[1px] border-[#f5efef32] transition-all duration-300 ${isScrolled ? " bg-white" : "bg-transparent"
                }`}>

            <div className='max-w-7xl mx-auto flex  items-center justify-between py-5'>
                <div>
                    <h1 className={`text-[28px]  font-semibold ${isScrolled ? "text-black" : "text-white"}`}>Foodie Haven<span className='text-[#FF8D29]'>.</span></h1>
                </div>
                <div className='flex items-center gap-8'>
                    <div>
                        <ul className={`flex  font-semibold gap-8 ${isScrolled ? "text-black" : "text-[#F1D6C6] "}`}>
                            <Link to='/' className='hover:text-[#FF8D29]'>Home</Link>
                            <Link to='/' className='hover:text-[#FF8D29]'>About Us</Link>
                            <Link to='/' className='hover:text-[#FF8D29]'>Shop</Link>
                            <Link to='/' className='hover:text-[#FF8D29]'>Blog</Link>
                            <Link to='/' className='hover:text-[#FF8D29]'>Contact Us</Link>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        {/* <IoIosSearch className='text-2xl text-[#F1D6C6] font-extrabold'></IoIosSearch> */}
                        <IoSearchSharp className={`text-2xl ${isScrolled ? "text-black" : "text-[#F1D6C6]"}`}></IoSearchSharp>
                        <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#FF8D29]  group py-2.5 px-9">
                            <span class="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white font-semibold">Reservation</span>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;