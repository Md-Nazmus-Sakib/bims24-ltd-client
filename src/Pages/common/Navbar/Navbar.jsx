import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { searchField, setSearchField, user, logOut, loading } = useAuth();
    const cityNameRef = useRef(null);
    const handleButtonClick = () => {
        const cityName = cityNameRef.current.value;
        setSearchField(cityName)
    };



    const handelLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Log Out',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    if (loading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-spinner loading-lg text-secondary"></span>
        </div>
    }
    const routeLink = <>
        <div className="search-fiend">
            <input placeholder="Type City Name" type="text" ref={cityNameRef} />
            <button onClick={handleButtonClick} type="submit" className='h-full'><FaSearch></FaSearch></button>
        </div>
        <li><NavLink to={'/'}> Home</NavLink></li>
        <li><NavLink to={'/contact'}> Contact</NavLink></li>
        {
            user && <li><NavLink to={'/addShop'}>Add Shop</NavLink></li>

        }
        {
            user ? <li onClick={handelLogOut}><Link>LogOut</Link> </li> :
                <li><NavLink to={'/login'}> Login</NavLink></li>
        }



    </>
    return (
        <div className="navbar bg-base-100 rounded-t-full lg:rounded-none pt-12">
            <div className="navbar-start border-b lg:border-b-0 w-full lg:w-1/3">
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
            <div className="navbar-end hidden lg:flex items-center text-center flex-1">
                <ul className="menu menu-horizontal px-1 font-bold gap-4 md:pr-10">
                    {
                        routeLink
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;