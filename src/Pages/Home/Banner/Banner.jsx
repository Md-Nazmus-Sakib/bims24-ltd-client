import React from 'react';
import Lottie from "lottie-react";
import bannerBg from "../../../../public/bannerBg.json";
import bannerRight from "../../../../public/bannerBg1.json";
import bannerBgDown from "../../../../public/scene1-2023-12-24.json"
import './Banner.css'
const Banner = () => {
    return (
        <div className='relative min-h-[800px] bg-gradient-to-r from-[#3F096B] to-[#27094C] '>
            <Lottie className='hidden md:block' animationData={bannerBg} loop={true} />
            {/* <Lottie className='hidden md:block' animationData={bannerBgDown} loop={true} /> */}
            <div className='absolute top-10 md:top-0 text-white md:flex'>
                <div className='flex-1 flex justify-center items-center flex-col '>
                    <div className='px-4 md:pl-20 text-center md:text-left mx-auto'>
                        <h1 className='text-4xl sm:text-5xl font-extrabold'>Damaged Device? We Repair Everything.</h1>
                        <p className='my-8'>To know more about our services and talk to our expert about what's wrong with your device, you can reach us through email or give us a call for quick assistance.</p>
                        <div className='w-full'>
                            <button className="ui-btn rounded-lg mx-auto wrapper ">
                                <span className='font-extrabold text-2xl '>
                                    Get in Touch
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' md:h-full flex-1'>
                    <Lottie className='h-[400px] md:h-full' animationData={bannerRight} loop={true} />
                </div>
            </div>

        </div>
    );
};

export default Banner;