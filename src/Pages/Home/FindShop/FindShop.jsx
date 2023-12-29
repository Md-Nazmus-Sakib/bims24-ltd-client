import React from 'react';
import Lottie from "lottie-react";
import bannerBgDown from "../../../../public/scene1-2023-12-24.json";
import bannerBg from "../../../../public/bannerBg.json";
import Marquee from "react-fast-marquee";
import img2 from '../../../assets/Image/dinajpur.jpg'
import './FindShop.css';
import img1 from '../../../assets/Image/dinajpur.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const FindShop = () => {

    return (
        <div className=' min-h-[800px] bg-gradient-to-r from-[#3F096B] to-[#27094C] text-white'>

            <h1 className='sm:w-1/2 mx-auto text-4xl text-center py-12 font-extrabold tracking-wide'>Please initiate the repair process for your mobile device </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='sm:pl-12 mx-auto'>
                    <div className="card_shop">
                        <div className="card__content font-bold text-3xl py-4">Find mobile repair shop near you ↓
                            <div className="container my-4">

                                <div className="card_shop2">
                                    <div className="circle"></div>
                                    <div className="dot"></div>
                                    <div className="dot2"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className='col-span-1 lg:col-span-2 '>
                    <Swiper

                        grabCursor={true}
                        spaceBetween={30}

                        loop={true}
                        centeredSlides={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,

                            },
                            1024: {
                                slidesPerView: 2,

                            },
                            1300: {
                                slidesPerView: 3,

                            },
                        }}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,


                        }}

                        // slidesPerView={1}

                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay, Navigation]}

                        className="mySwiper h-full text-center">

                        <SwiperSlide>
                            <div className=' px-2 py-4 rounded-3xl mx-auto md:mx-8 group shadow1 item w-72 h-72 my-16  '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barishal</h1>
                                <div className="overlay rounded-3xl"></div>
                                <button className="card-btn text-black ">Barishal</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' px-2 py-4 rounded-3xl mx-auto md:mx-8 group1 shadow1 item w-72 h-72 my-16'>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barishal</h1>
                                <div className="overlay rounded-3xl"></div>
                                <button className="card-btn text-black">Click</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' px-2 py-4 rounded-3xl mx-auto md:mx-8 group2 shadow1 item w-72 h-72 my-16 '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barishal</h1>
                                <div className="overlay rounded-3xl"></div>
                                <button className="card-btn text-black">Click</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' px-2 py-4 rounded-3xl mx-auto md:mx-8 group3 shadow1 item w-72 h-72 my-16 '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barishal</h1>
                                <div className="overlay rounded-3xl"></div>
                                <button className="card-btn text-black">Click</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' px-2 py-4 rounded-3xl mx-auto md:mx-8 group4 shadow1 item w-72 h-72 my-16 '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barishal</h1>
                                <div className="overlay rounded-3xl"></div>
                                <button className="card-btn text-black">Click</button>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' px-2 py-4 rounded-3xl mx-auto md:mx-8 group5 shadow1 item w-72 h-72 my-16 '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barishal</h1>
                                <div className="overlay rounded-3xl "></div>
                                <button className="card-btn text-black">Click</button>
                            </div>

                        </SwiperSlide>




                    </Swiper>
                </div>
            </div >
        </div >
    );
};

export default FindShop;



{/* <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            // breakpoints={{
                            //     640: {
                            //         slidesPerView: 2,
                            //         spaceBetween: 20,
                            //     },
                            //     768: {
                            //         slidesPerView: 4,
                            //         spaceBetween: 40,
                            //     },
                            //     1024: {
                            //         slidesPerView: 5,
                            //         spaceBetween: 50,
                            //     },
                            // }}
                            modules={[Pagination]}
                            className="mySwiper py-20 text-center"
                        >
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' px-2 py-4 rounded-3xl mx-8 group shadow1 item'>
                                    <img className='w-60 h-full relative' src={img} alt="" />
                                    <h1 className='text-xl text-white'>Barishal</h1>
                                    <div className="overlay"></div>
                                    <button className="card-btn">Click</button>
                                </div>
                            </SwiperSlide>



                        </Swiper> */}