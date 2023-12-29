import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const routeLink = <>
        <NavLink to={'/'}> <li>Home</li></NavLink>
        <NavLink> <li>Contact</li></NavLink>
        <NavLink> <li>About</li></NavLink>
        <NavLink> <li>Home</li></NavLink>

    </>
    return (
        <div className="navbar bg-base-100 rounded-t-full lg:rounded-none">
            <div className="navbar-start border-b lg:border-b-0 w-full lg:w-1/2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-white rounded-box w-52 h-52 ">
                        {
                            routeLink
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-extrabold">Bims24Ltd</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold gap-4 md:px-20">
                    {
                        routeLink
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;