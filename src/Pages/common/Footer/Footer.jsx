import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-2 sm:p-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white pb-20">

            <div className='sm:flex justify-between sm:w-full sm:px-12'>
                <div className='flex flex-col sm:flex-row justify-center items-center '>

                    <h1 className="font-bold text-3xl">
                        Bims24Ltd<br />
                        <span className='text-xl'>Providing reliable tech since 2023</span>
                    </h1>

                </div>


                <nav>
                    <h1 className='text-2xl border-b-2 mb-4'>Follow Us</h1>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <a href="https://twitter.com/"><FaTwitter></FaTwitter></a>
                        <a href="https://web.whatsapp.com/"><FaWhatsapp></FaWhatsapp></a>
                        <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>

                    </div>

                </nav>
            </div>
            <div className='border-4 px-4 h-20 rounded-full bg-black text-white'>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;