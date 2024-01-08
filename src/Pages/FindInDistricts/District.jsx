import React from 'react';
import './District.css'
import useAuth from '../../Hooks/useAuth';



const District = ({ dis }) => {

    const { searchField, setSearchField } = useAuth();


    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 border my-12 overflow-hidden'>

            <div className="card my-12 col-span-1">
                <div className="card-body items-center justify-center flex-row">
                    <div className="loader"></div>
                    <h2 className="card-title text-3xl font-extrabold my-4 text-white mx-4">{dis.name}</h2>


                </div>
            </div>
            <div className=' text-white col-span-1 lg:col-span-2 flex flex-wrap items-center justify-center gap-4 container-town  '>

                <div id="container-stars">
                    <div id="stars"></div>
                </div>

                {
                    dis?.towns?.map((town, index) => <div key={index} className=' m-4' >


                        <button onClick={() => setSearchField(town)} className='button-town '>
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



