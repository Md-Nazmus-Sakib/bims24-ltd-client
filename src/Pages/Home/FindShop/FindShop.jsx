import React, { useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import bannerBgDown from "../../../../public/scene1-2023-12-24.json";
import bannerBg from "../../../../public/bannerBg.json";
import Marquee from "react-fast-marquee";
import img2 from '../../../assets/Image/dinajpur.jpg'
import './FindShop.css';
import img1 from '../../../assets/Image/dinajpur.jpg'
import { FaSearch } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useAllTowns from '../../../Hooks/useAllTowns';

const FindShop = () => {

    const { searchField, setSearchField } = useAuth();

    // console.log(searchField)
    const [suggestions, setSuggestions] = useState([]);
    // console.log(suggestions)
    const allTownName = useAllTowns();
    const inputRef = useRef();

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchField(value);
        // // Filter suggestions based on the typed text
        const matchingTowns = allTownName.filter((town) =>
            town.toLowerCase().startsWith(value.toLowerCase())
        );
        setSuggestions(matchingTowns);;

    };

    const handleSuggestionClick = (town) => {
        setSearchField(town);
        setSuggestions([]);
    };

    const handleOutsideClick = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target) && !inputRef.current.contains(document.activeElement)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    let settings = {
        slidesToShow: 3,
        cssEase: "linear",
        arrows: true,
        dots: false,

        focusOnSelect: true,
        pauseOnHover: true,
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        speed: 3000,

        autoplaySpeed: 3000,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

    return (
        <div className=' min-h-[800px] bg-gradient-to-r from-[#3F096B] to-[#27094C] text-white'>

            <h1 className='sm:w-1/2 mx-auto text-4xl text-center py-12 font-extrabold tracking-wide '>Please initiate the repair process for your mobile device </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='mx-auto'>
                    <div className="card_shop bg-black">
                        <div className="card__content font-bold text-3xl py-4 text-white">Find mobile repair shop near you ↓
                            <div className="container my-4">

                                <div className="card_shop2">
                                    <div className="circle"></div>
                                    <div className="dot"></div>
                                    <div className="dot2"></div>
                                </div>

                            </div>
                            <div ref={inputRef}>
                                <input type="text" id='findSearch' autoComplete="search-line2" placeholder="Type City Name" name="text" className="input-search mt-8 w-full text-xl font-extrabold text-black" value={searchField}
                                    onChange={handleInputChange} />

                                {suggestions.length > 0 && (
                                    <ul className="mt-2 border rounded-md p-2 absolute z-10 bg-white shadow-md text-left h-60 overflow-y-auto w-full">
                                        {suggestions.map((town, index) => (
                                            <li
                                                key={index}
                                                className="cursor-pointer text-black py-1 hover:bg-gray-200"
                                                onClick={() => handleSuggestionClick(town)}
                                            >
                                                {town}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <Link to={'/searchShop'}>   <button className="box-search my-8 w-full">
                                    <p className="text-button text-black" >Search </p>
                                </button></Link>

                            </div>
                        </div>

                    </div>

                </div>
                <div className='col-span-1 md:col-span-2 mx-5 my-8 '>

                    <Slider {...settings}>
                        <div>
                            <div className=' px-2 py-4 rounded-3xl mx-8 group8 shadow1 item my-4 text-center  '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Barisal</h1>
                                <div className="overlay rounded-3xl"></div>
                                <Link to={'/division/Barisal'}> <button className="card-btn text-black ">Barisal</button></Link>
                            </div>
                        </div>


                        <div>

                            <div className=' px-2 py-4 rounded-3xl mx-8 group1 shadow1 item my-4 text-center'>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Chittagong</h1>
                                <div className="overlay rounded-3xl"></div>
                                <Link to={'/division/Chittagong'}> <button className="card-btn text-black ">Chittagong</button></Link>
                            </div>
                        </div>



                        <div>
                            <div className=' px-2 py-4 rounded-3xl mx-8 group2 shadow1 item my-4 text-center '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'> Dhaka</h1>
                                <div className="overlay rounded-3xl"></div>
                                <Link to={'/division/Dhaka'}> <button className="card-btn text-black ">Dhaka</button></Link>
                            </div>
                        </div>



                        <div>
                            <div className=' px-2 py-4 rounded-3xl mx-8 group3 shadow1 item my-4 text-center '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Khulna</h1>
                                <div className="overlay rounded-3xl"></div>
                                <Link to={'/division/Khulna'}> <button className="card-btn text-black ">Khulna</button></Link>
                            </div>
                        </div>



                        <div>
                            <div className=' px-2 py-4 rounded-3xl mx-8 group4 shadow1 item my-4 text-center '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Rajshahi</h1>
                                <div className="overlay rounded-3xl"></div>
                                <Link to={'/division/Rajshahi'}> <button className="card-btn text-black ">Rajshahi</button></Link>
                            </div>
                        </div>



                        <div>
                            <div className=' px-2 py-4 rounded-3xl mx-8 group5 shadow1 item my-4 text-center '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Rangpur</h1>
                                <div className="overlay rounded-3xl "></div>
                                <Link to={'/division/Rangpur'}> <button className="card-btn text-black ">Rangpur</button></Link>
                            </div>
                        </div>


                        <div>

                            <div className=' px-2 py-4 rounded-3xl mx-8 group6 shadow1 item my-4 text-center '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'> Mymensingh</h1>
                                <div className="overlay rounded-3xl "></div>
                                <Link to={'/division/Mymensingh'}> <button className="card-btn text-black ">Mymensingh</button></Link>
                            </div>
                        </div>



                        <div>
                            <div className=' px-2 py-4 rounded-3xl mx-8 group7 shadow1 item my-4 text-center '>
                                <img className=' h-full rounded-3xl relative' src={img1} alt="" />
                                <h1 className='text-xl text-white  mt-6'>Sylhet</h1>
                                <div className="overlay rounded-3xl "></div>
                                <Link to={'/division/Sylhet'}> <button className="card-btn text-black ">Sylhet</button></Link>
                            </div>
                        </div>




                    </Slider>

                    {/* </Swiper> */}
                </div>
            </div >
        </div >
    );
};

export default FindShop;



