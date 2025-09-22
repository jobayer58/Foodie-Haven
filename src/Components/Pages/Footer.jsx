import React from 'react';
import footer from '../../assets/images/footer-illustration.png'
import shape from '../../assets/images/shape-grey.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import delivery from '../../assets/images/delivery-boy.svg'
import Marquee from 'react-fast-marquee';

const Footer = () => {
    return (
        <div className=''>
            {/* top shape */}
            <img src={shape} className='w-full transform -scale-y-100' alt="" />

            {/* footer bg */}
            <div
                className="border-b-2 border-gray-300 bg-cover bg-center h-auto md:h-[820px] lg:h-[500px] w-full mx-auto object-cover"
                style={{ backgroundImage: `url(${footer})` }}
            >
                {/* marquee */}
                <div>
                    <Marquee
                        speed={80}
                        direction='right'
                        pauseOnHover={false}
                        gradient={false}
                        className="lg:top-[367px] md:top-[701px] top-[1130px] flex items-center"
                    >
                        <img
                            src={delivery}
                            className="w-28 h-24 md:w-34 md:h-30 lg:w-38 lg:h-34 object-contain mx-6 md:mx-8"
                            alt="delivery-cycle"
                        />
                    </Marquee>
                </div>

                {/* footer content */}
                <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-between items-start gap-10 px-6 lg:px-0 md:py-10 py-20 lg:py-0">
                    
                    {/* 1 logo*/}
                    <div className='space-y-4  md:text-left'>
                        <h1 className="md:text-[28px] text-2xl font-bold">
                            Foodie Haven<span className="text-[#FF8D29]">.</span>
                        </h1>
                        <p className='text-[#787878] text-sm md:text-base'>
                            Financial experts support or help you to to <br className=""/> 
                            find out which way you can raise your <br className=""/> 
                            funds more.
                        </p>
                        <div className='flex  md:justify-start gap-2'>
                            <FaFacebook className='text-2xl md:text-3xl p-2 bg-[#FF8D29] hover:bg-black text-white rounded-full'></FaFacebook>
                            <FaGithub className='text-2xl md:text-3xl p-2 bg-[#FF8D29] hover:bg-black text-white rounded-full'></FaGithub>
                            <FaInstagram className='text-2xl md:text-3xl p-2 bg-[#FF8D29] hover:bg-black text-white rounded-full'></FaInstagram>
                            <FaTwitter className='text-2xl md:text-3xl p-2 bg-[#FF8D29] hover:bg-black text-white rounded-full'></FaTwitter>
                        </div>
                    </div>

                    {/* 2 contact */}
                    <div className='space-y-4  md:text-left'>
                        <div className='flex flex-col md:flex-row  md:items-center justify-center md:justify-start gap-2 md:gap-5'>
                            <h1 className='text-lg md:text-xl font-bold'>Contact Info</h1>
                            <div className='h-1 w-8 bg-[#FF8D29]'></div>
                        </div>                        
                        <ul className='space-y-3 md:space-y-4 text-[#787878] text-sm md:text-base'>
                            <li>+1 (062) 109-9222</li>
                            <li>Info@YourGmail24.com</li>
                            <li>153 Williamson Plaza,<br /> Maggieberg, MT 09514</li>
                        </ul>
                    </div>

                    {/* 3 Opening Hours */}
                    <div className='space-y-4  md:text-left'>
                        <div className='flex flex-col md:flex-row  md:items-center justify-center md:justify-start gap-2 md:gap-5'>
                            <h1 className='text-lg md:text-xl font-bold'>Opening Hours</h1>
                            <div className='h-1 w-8 bg-[#FF8D29]'></div>
                        </div>
                        <ul className='space-y-3 md:space-y-4 text-[#787878] text-sm md:text-base'>
                            <li>Monday-Friday: 08:00-22:00</li>
                            <li>Tuesday 4PM: Till Mid Night</li>
                            <li>Saturday: 10:00-16:00</li>
                        </ul>
                    </div>

                    {/* 4 input field */}
                    <div className='w-full md:w-[340px] md:mt-10 lg:mt-0 h-auto md:h-[320px] shadow-2xl bg-white relative bottom-0 md:bottom-10 space-y-3 p-4 md:p-0 mx-auto md:mx-0'>
                        <div className='px-0 md:px-6 gap-2 flex flex-col md:flex-row'>
                            <input type="text" placeholder='Your Name' className='border w-full md:w-[140px] border-gray-300 p-2 text-sm md:text-base' />
                            <input type="text" placeholder='Your email' className='border w-full md:w-[140px] border-gray-300 p-2 text-sm md:text-base' />
                        </div>
                        <div className='px-0 md:px-6 flex flex-col md:flex-row gap-2'>
                            <select className='border w-full md:w-[140px] border-gray-300 p-2 text-gray-600 text-sm md:text-base'>
                                <option value="">Persons</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                                <option value="10">5+ Persons</option>
                            </select>
                            <input type="date" className='border text-[#787878] w-full md:w-[140px] border-gray-300 p-2 text-sm md:text-base' />
                        </div>
                        <div className='px-0 md:px-6'>
                            <textarea
                                className='w-full md:w-[290px] h-[120px] border border-gray-300 p-2 resize-none text-sm md:text-base'
                                placeholder='Message'
                            />
                        </div>
                        <div className='px-0 md:px-6'>
                            <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#FF8D29] group py-2.5 px-6 md:px-9 text-sm md:text-base">
                                <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white font-semibold">Book A Table</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* copyright */}
            <p className='text-center py-4 text-[#787878] text-sm md:text-base'>
                © 2025 codewithjobayer.dev All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
