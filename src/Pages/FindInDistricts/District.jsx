import React from 'react';
import './District.css'



const District = ({ dis }) => {




    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 border my-12 container-town'>
            <div id="container-stars">
                <div id="stars"></div>
            </div>
            <div className="card my-12 col-span-1">
                <div className="card-body items-center justify-center flex-row">
                    <div className="loader"></div>
                    <h2 className="card-title text-3xl font-extrabold my-4 text-white mx-4">{dis.name}</h2>


                </div>
            </div>
            <div className=' text-white col-span-1 lg:col-span-2 flex flex-wrap gap-4 '>



                {
                    dis?.towns?.map((town, index) => <div key={index} className=' m-4' >


                        <button className='button-town '>
                            <span className='text-2xl font-bold mx-2'> {town}
                            </span>
                        </button>

                    </div>)
                }

            </div>
        </div>

    );
};

export default District;



