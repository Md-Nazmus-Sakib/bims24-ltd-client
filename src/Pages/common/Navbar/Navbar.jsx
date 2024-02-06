import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import brandLogo from '../../../assets/icon/mobileLogo.png'
import './Navbar.css'
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAllTowns from '../../../Hooks/useAllTowns';
import useAdmin from '../../../Hooks/useAdmin';
const Navbar = () => {
    const { searchField, setSearchField, user, logOut, loading } = useAuth();
    // console.log(searchField)
    const [suggestions, setSuggestions] = useState([]);
    // console.log(suggestions)
    const allTownName = useAllTowns();
    const inputRef = useRef();
    const [isAdmin, isAdminLoading] = useAdmin();


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

    if (loading || isAdminLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    const routeLink = <>

        <form className="search-fiend mb-2" ref={inputRef}>

            <input type="text"
                placeholder="Type to search..."
                className="w-full border rounded-md p-2"
                name='searchField'
                value={searchField}
                onChange={handleInputChange} />

            {suggestions?.length > 0 && (
                <ul className="mt-2 border rounded-md p-2 absolute z-10 bg-white shadow-md text-left h-60 overflow-y-auto w-full">
                    {suggestions?.map((town, index) => (
                        <li
                            key={index}
                            className="cursor-pointer py-1 hover:bg-gray-200"
                            onClick={() => handleSuggestionClick(town)}
                        >
                            {town}
                        </li>
                    ))}
                </ul>
            )}
            <Link to={'/searchShop'}> <button type="submit" className='h-full'><FaSearch></FaSearch></button></Link>

        </form>

        <li><NavLink to={'/'}> Home</NavLink></li>
        <li><NavLink to={'/contactUs'}> Contact</NavLink></li>
        {
            user && <li><NavLink to={'/addShop'}>Add Shop</NavLink></li>

        }
        {
            user ? <li onClick={handelLogOut}><Link>LogOut</Link> </li> :
                <li><NavLink to={'/login'}> Login</NavLink></li>
        }
        {isAdmin && <>
            <div className="dropdown dropdown-end">
                <li tabIndex={0} role="button" ><Link ><FaChevronDown></FaChevronDown></Link></li>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>  <NavLink to={'/dashboard/allShop'}>Dashboard</NavLink ></li>

                </ul>
            </div>
        </>
        }



    </>
    return (
        <div className="navbar bg-base-100 rounded-t-full lg:rounded-none pt-8">
            <div className="navbar-start border-b lg:border-b-0 w-full md:w-36 ">
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
                <img className='w-20 rounded-3xl ml-12' src={brandLogo} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex items-center text-center grow ">
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