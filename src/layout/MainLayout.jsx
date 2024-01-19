import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/common/Navbar/Navbar';
import Footer from '../Pages/common/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>

            <div className="mockup-phone border-primary w-full min-h-screen ">
                <div className="camera bg-gray-400"></div>
                <div className="display w-full overflow-visible">
                    <div className=' hidden lg:block '>

                        <Navbar></Navbar>
                        <div className='min-h-screen border bg-white'>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>

                </div>
                <div className='block lg:hidden bg-white  rounded-[35px] px-2 lg:px-0 w-full overflow-hidden '>
                    <Navbar></Navbar>
                    <div className=' bg-white'>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>


    );
};

export default MainLayout;