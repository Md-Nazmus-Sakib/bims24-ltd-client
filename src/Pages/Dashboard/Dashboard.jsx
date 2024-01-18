
import React, { useState } from 'react';
import manyIcon from '../../assets/icon/Icon_Menu.svg';
import sideArrow from '../../assets/icon/Icon_SideArrow_round.svg'
import imgVector from '../../assets/icon/Icon_Vector.svg';
import imgHome from '../../assets/icon/Icon_Home.svg';
import imgUser from '../../assets/icon/Icon_Patient Profile.svg';
import imgCalender from '../../assets/icon/Icon_medical history.svg';
import shopIcon from '../../assets/Image/shopIcon.png';
import imgAppoint from '../../assets/icon/Icon_Appointment.svg';
import imgRequest from '../../assets/icon/request.png';
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Dashboard = () => {


    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen)


    const routeLink = <>
        <li><NavLink to={'/dashboard/allShop'}>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='w-10' src={shopIcon} alt="" />
            <p className='text-base font-medium'>All Shop</p>
        </div> : <div><img className='p-0 mx-auto w-10' src={shopIcon} alt="" /></div>} </NavLink></li>
        <li><NavLink to={'/dashboard/shopRequest'}>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='w-10' src={imgRequest} alt="" />
            <p className='text-base font-medium'>Shop Request</p>
        </div> : <div><img className='p-0 mx-auto w-10' src={imgRequest} alt="" /></div>}</NavLink></li>
        <li>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='w-10' src={imgCalender} alt="" />
            <p className='text-base font-medium'>Home</p>
        </div> : <><img className='p-0 mx-auto' src={imgCalender} alt="" /></>}</li>
        <li>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='' src={imgAppoint} alt="" />
            <p className='text-base font-medium'>Home</p>
        </div> : <><img className='p-0 mx-auto' src={imgAppoint} alt="" /></>}</li>
        {/* <li>{isOpen ? <div className='flex justify-start p-2 gap-8'>
            <img className='' src={imgSetting} alt="" />
            <p className='text-base font-medium'>Home</p>
        </div> : <><img className='p-0 mx-auto' src={imgSetting} alt="" /></>}</li> */}

    </>
    return (
        <div className=' md:flex relative overflow-auto '>
            <div className={`absolute top-0 md:relative`}>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className={`bg-base-200 w-full md:w-[96px]  ${isOpen ? 'hidden' : 'block '}`}>
                    {/* Page content here */}
                    {/* {<Outlet></Outlet>} */}

                    <div className="p-0 md:pt-8 md:min-h-[1051px] bg-base-200 text-base-content">
                        <label onClick={() => setIsOpen(true)} className="cursor-pointer"><img className=' mx-auto md:mb-28' src={manyIcon} alt="" /></label>
                        {/* Sidebar content here */}
                        <ul className=' hidden md:flex flex-col gap-10 '>
                            {
                                routeLink
                            }
                        </ul>

                    </div>

                </div>
                <div className={`w-[220px] min-h-[1051px]  ${isOpen ? 'pl-0 relative' : '-pl-12 hidden'}`}>

                    <div className={`menu min-h-[1051px]  flex flex-col gap-28 pt-8  bg-base-200 text-base-content ${isOpen ? 'pr-0' : 'pr-8'}`}>
                        <label onClick={() => setIsOpen(false)} aria-label="close sidebar" className="drawer-overlay relative ">
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














// return (
//     <div className=' min-h-[800px] bg-gradient-to-r from-[#3F096B] to-[#27094C] text-white'>

//     </div>
// );
// };

export default Dashboard;