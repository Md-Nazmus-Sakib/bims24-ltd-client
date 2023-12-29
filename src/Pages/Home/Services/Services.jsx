import React from 'react';
import serviceLottie from '../../../../public/bannerRight.json'
import Lottie from 'lottie-react';

const Services = () => {
    return (
        <div className='py-12 min-h-[800px] bg-gradient-to-r from-[#3F096B] to-[#27094C] text-white'>
            <div className=' w-full p-4 lg:w-2/3 mx-auto'>
                <h1 className='text-3xl sm:text-5xl font-extrabold my-8'>Revitalize your phone with our swift repair services.</h1>
                <p className='text-xl'>At our mobile store, we swiftly fix all smartphone models. Our services cover screen repair, water damage, chip-level fixes, ports, buttons, cameras, batteries, software, and accessories.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-12 mx-6 md:mx-12'>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold my-4'>All Brands & Models</h1>
                        <p>We specialize in repairing a wide array of mobile brands and models, ensuring comprehensive service for every device that comes our way!</p>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-3xl font-semibold my-4'>Skilled Technicians</h1>
                        <p>
                            Our certified professionals are dedicated to providing exceptional repair services, ensuring your device is in expert hands for a swift and reliable fix!</p>
                    </div>
                </div>
                <div>
                    <Lottie className='h-[400px]' animationData={serviceLottie} loop={true} />
                </div>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold my-4'>Genuine Parts</h1>
                        <p>We exclusively offer genuine and premium-quality products, ensuring utmost satisfaction and reliability for our customers' needs!</p>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-3xl font-semibold my-4'>Friendly service</h1>
                        <p>
                            Most services listed are typically repaired within an hour, with many cases resolved on the same day for our customers' convenience and prompt satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;