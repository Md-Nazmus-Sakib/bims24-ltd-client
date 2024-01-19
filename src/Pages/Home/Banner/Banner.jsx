import React from 'react';
import Lottie from "lottie-react";
import bannerBg from "../../../../public/bannerBg.json";
import bannerRight from "../../../../public/bannerBg1.json";
import bannerBgDown from "../../../../public/scene1-2023-12-24.json"
import './Banner.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <div className='relative min-h-[800px] bg-gradient-to-r from-[#3F096B] to-[#27094C] '>
            <Lottie className='hidden md:block' animationData={bannerBg} loop={true} />

            <div className='absolute top-10 md:top-0 text-white md:flex'>
                <div className='flex-1 flex justify-center items-center flex-col '>
                    <div className='px-4 md:pl-20 text-center md:text-left mx-auto'>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5, x: -500 }}
                            // animate={{ opacity: 1, scale: 1, x: 0 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: 1,
                                delay: .5,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className='text-4xl sm:text-5xl font-extrabold'>Damaged Device? We Repair Everything.</motion.h1>

                        <motion.p
                            initial={{ opacity: 0, scale: 0.5, x: 500 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                duration: 2,
                                delay: 1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className='my-8'>To know more about our services and talk to our expert about what's wrong with your device, you can reach us through email or give us a call for quick assistance.</motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                duration: 1,
                                delay: .7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className='w-full'>
                            <NavLink to={'/contactUs'}>
                                <button className="ui-btn rounded-lg mx-auto wrapper ">
                                    <span className='font-extrabold text-2xl '>
                                        Get in Touch
                                    </span>
                                </button>
                            </NavLink>
                        </motion.div>
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