import React from 'react';
import repImg from "../../assets/Image/shop.jpg";
import mobileImg from "../../assets/Image/phoneIcon.png";
import emailImg from "../../assets/Image/email.png";
import socialImg from "../../assets/Image/social.png";
import './ContactUs.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
const ContactUs = () => {
    return (
        <div>

            <div className='min-h-[650px] text-white flex justify-center items-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${repImg})`, backgroundSize: "cover" }}>
                <div className='w-full sm:w-2/3 text-justify px-2'>
                    <div className=' h-[150px]'>
                        <div id="div1">
                            <div id="l" style={{ margin: "33px" }}>
                                <div className="pupil">
                                    <div className="p5">
                                        <div className="pupl2">
                                            <div className="pupil3"></div>
                                            <div className="pupil4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="m" style={{ margin: "33px" }}>
                                <div className="pupil">
                                    <div className="p5">
                                        <div className="pupl2">
                                            <div className="pupil3"></div>
                                            <div className="pupil4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h1 className='text-4xl font-extrabold text-center my-4'>Get In Touch</h1>
                        <p className='text-xl my-8'>Feel free to reach out to our dedicated team for all your needs. Whether you require repairs, technical assistance, or have inquiries about our services, we're here to help you.</p>
                        <div className='flex justify-center'>
                            <div className="typewriter">
                                <div className="slide"><i></i></div>
                                <div className="paper"></div>
                                <div className="keyboard"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Card section  */}
            <div className='md:flex justify-between gap-6 md:-mt-28 text-center'>
                <div className="contact-card text-white  my-4">
                    <div className="contact-card-info">
                        <div>
                            <img className='w-28 mx-auto' src={mobileImg} alt="" />
                            <h1 className='text-3xl '>By Phone</h1>
                            <p className='my-6'>Contact Us By Mobile</p>
                            <div className='social-card'>
                                <p className='text-black font-extrabold'>+880 17XXXXXXXX</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="contact-card text-white my-4">
                    <div className="contact-card-info">
                        <div>
                            <img className='w-28 mx-auto' src={emailImg} alt="" />
                            <h1 className='text-3xl '>By Email</h1>
                            <p className='my-6'>Contact Us By Email</p>
                            <div className='social-card'>
                                <p className='text-black font-extrabold'>info@domain.com</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="contact-card text-white my-4">
                    <div className="contact-card-info">
                        <div>
                            <img className='w-28 mx-auto' src={socialImg} alt="" />
                            <h1 className='text-3xl '>By Social media</h1>
                            <p className='my-6'>Contact us through social media.</p>
                            <div className="social-card">
                                <button className="Btn-social-icon facebook">
                                    <span className="svgContainer text-lg ">
                                        <FaFacebook></FaFacebook>
                                    </span>
                                    <span className="BG"></span>
                                </button>

                                <button className="Btn-social-icon whatsapp">
                                    <span className="svgContainer text-lg">
                                        <FaWhatsapp></FaWhatsapp>
                                    </span>
                                    <span className="BG"></span>
                                </button>

                                <button className="Btn-social-icon instagram">
                                    <span className="svgContainer text-lg">
                                        <FaInstagram></FaInstagram>
                                    </span>
                                    <span className="BG"></span>
                                </button>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;