import React from 'react';
import './District.css'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
const District = ({ dis }) => {
    console.log(dis)
    return (

        <Link>
            <div className="card-border overflow-hidden">
                <div className="card-bg">
                    <Marquee className='overflow-hidden'> <span className="viper"> &#160; {dis.name}  &#160; </span></Marquee>
                </div>


                <div className="loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
                    <button className="ui-btn-dis text ">
                        <span className='font-extrabold text-3xl sm:text-4xl uppercase'>
                            {dis.name}
                        </span>
                    </button>
                </div>
            </div>
        </Link>

    );
};

export default District;