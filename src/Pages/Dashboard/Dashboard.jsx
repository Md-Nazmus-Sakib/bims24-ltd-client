
import React, { useEffect, useRef, useState } from 'react';
import manyIcon from '../../assets/icon/Icon_Menu.svg';
import sideArrow from '../../assets/icon/Icon_SideArrow_round.svg'
import imgVector from '../../assets/icon/Icon_Vector.svg';

import imgUser from '../../assets/icon/Icon_Patient Profile.svg';

import shopIcon from '../../assets/Image/shopIcon.png';

import imgRequest from '../../assets/icon/request.png';
import { NavLink, Outlet } from 'react-router-dom';


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Dashboard = () => {


    const [isOpen, setIsOpen] = useState(false)
    const sidebarRef = useRef(null);
    console.log(isOpen)

    const handleOutsideClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Attach the event listener when the component mounts
        document.addEventListener('click', handleOutsideClick);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const routeLink = <>
        <li><NavLink to={'/dashboard/allShop'}>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='w-10' src={shopIcon} alt="" />
            <p className='text-base font-medium'>All Shop</p>
        </div> : <div><img className='p-0 mx-auto w-10' src={shopIcon} alt="" /></div>} </NavLink></li>
        <li><NavLink to={'/dashboard/shopRequest'}>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='w-10' src={imgRequest} alt="" />
            <p className='text-base font-medium'>Shop Request</p>
        </div> : <div><img className='p-0 mx-auto w-10' src={imgRequest} alt="" /></div>}</NavLink></li>
        <li><NavLink to={'/dashboard/allUser'}>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='w-10' src={imgUser} alt="" />
            <p className='text-base font-medium'>All User</p>
        </div> : <><img className='p-0 mx-auto' src={imgUser} alt="" /></>}</NavLink></li>


    </>
    return (
        <div className=' md:flex relative overflow-auto '>
            <div ref={sidebarRef} className={`absolute top-0 z-50 md:relative`}>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className={`bg-base-200 w-full md:w-[96px]  ${isOpen ? 'hidden' : 'block '}`}>
                    {/* Page content here */}
                    {/* {<Outlet></Outlet>} */}

                    <div onClick={() => setIsOpen(true)} className="p-0 md:pt-8 md:min-h-[1051px] bg-base-200 text-base-content">
                        <label className="cursor-pointer"><img className=' mx-auto md:mb-28' src={manyIcon} alt="" /></label>
                        {/* Sidebar content here */}
                        <ul className=' hidden md:flex flex-col gap-10 '>
                            {
                                routeLink
                            }
                        </ul>

                    </div>

                </div>
                <div className={`w-[220px]  ${isOpen ? 'pl-0 relative' : '-pl-12 hidden'}`}>

                    <div onClick={() => setIsOpen(false)} className={`menu  flex flex-col gap-28 pt-8  bg-base-200 text-base-content ${isOpen ? 'pr-0' : 'pr-8'}`}>
                        <label aria-label="close sidebar" className="drawer-overlay relative ">
                            <div className='ml-6 flex justify-start items-center gap-2'>
                                <img className='p-2' src={imgVector} alt="" />
                                <p className='text-2xl font-semibold mr-8'>Bims<span className='text-[#FF7594]'>24 </span></p>
                            </div>
                            <img className='absolute -right-5 top-0' src={sideArrow} alt="" /></label>
                        {/* Sidebar content here */}
                        <ul className='ml-4 flex flex-col gap-10'>
                            {
                                routeLink
                            }
                        </ul>

                    </div>
                </div>

            </div>
            <div className='min-h-screen bg-black w-full p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};


export default Dashboard;