import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const AddShopLocation = () => {
    const { user, loading } = useAuth();
    const [locations, setLocations] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedTown, setSelectedTown] = useState('');
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();

    const handleDivisionChange = (e) => {
        setSelectedDistrict('')
        setSelectedDivision(e.target.value);
        ;
    }

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    }
    const handleTownChange = (e) => {
        setSelectedTown(e.target.value);
    }
    // console.log(selectedDivision, selectedDistrict, selectedTown)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('locationData.json');
                const data = await response.json();
                setLocations(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handelAddShop = (e) => {
        e.preventDefault();
        const form = e.target;
        const shopName = form.shopName.value;
        const ownerName = form.ownerName.value;
        const email = form.email2.value;
        const mobile = form.mobile.value;
        const alterMobile = form.alterMobile.value;
        const address = form.address.value;
        const notes = form.notes.value;
        setError('')
        if (!selectedDivision || !selectedDistrict || !selectedTown) {
            return setError('Division ,District  and Upazila must required.')
        }
        const shopInfo = { shopName, ownerName, email, mobile, alterMobile, address, notes, selectedDivision, selectedDistrict, selectedTown, userEmail: user?.email, status: 'Pending', addDate: new Date }
        // console.log(shopInfo)
        axiosPublic.post('/shops', shopInfo)
            .then(res => {
                if (res.data.message) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: `${res.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (res.data.insertedId) {
                    // console.log('user added to the database')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Shop added successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    form.reset();
                }
            })

            .catch(error => {

                setError(error.message)
            })
    }


    return (


        <div className="card w-full min-h-screen p-2 md:p-10 shadow-2xl bg-gray-500 ">

            <h1 className="text-5xl font-bold text-white">Add Your Shop to be Register !</h1>
            <form onSubmit={handelAddShop} className="card-body">
                <div className='md:flex w-full  gap-4'>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-name">
                            <span className="label-text text-xl text-white font-semibold">Shop Name *</span>
                        </label>
                        <input id="shop-name" type="text" name='shopName' placeholder="Shop Name" className="input input-bordered font-semibold text-xl" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-owner" >
                            <span className="label-text text-xl text-white font-semibold">Owner Name *</span>
                        </label>
                        <input id="shop-owner" type="text" name='ownerName' placeholder="Owner Name" className="input input-bordered font-semibold text-xl" required />
                    </div>
                </div>
                <div className='lg:flex w-full  gap-4'>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-email" >
                            <span className="label-text text-xl text-white font-semibold">Email</span>
                        </label>
                        <input id="shop-email" type="email" name='email2' placeholder="Email" className="input input-bordered font-semibold text-xl" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-mobile">
                            <span className="label-text text-xl text-white font-semibold">Mobile *</span>
                        </label>
                        <input id="shop-mobile" type='tel' name='mobile' placeholder="01xxxxxxxxx" className="input input-bordered font-semibold text-xl" maxLength="11" pattern="[0-9]{11}" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-alt-mobile">
                            <span className="label-text text-xl text-white font-semibold">Alternative Mobile</span>
                        </label>
                        <input id="shop-alt-mobile" type='tel' name='alterMobile' placeholder="01xxxxxxxxx" className="input input-bordered font-semibold text-xl" maxLength="11" pattern="[0-9]{11}" />
                    </div>
                </div>
                {/* location start  */}
                <div className='md:flex justify-center'>
                    <div className="w-full bg-gray-500 stats stats-vertical sm:stats-horizontal shadow">

                        <div className="stat">
                            <div className="stat-title uppercase text-white font-extrabold text-center my-4" >Division *</div>
                            <select value={selectedDivision} id='division' onChange={handleDivisionChange} className="p-2 border rounded">
                                <option value="">Select Division</option>
                                {locations?.divisions?.map(division => (
                                    <option key={division.name} value={division.name}>{division.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="stat">
                            <div className="stat-title uppercase text-white font-extrabold text-center my-4" >District *</div>
                            <select value={selectedDistrict} id='district' onChange={handleDistrictChange} className="p-2 border rounded">
                                <option value="">Select District</option>
                                {selectedDivision && locations?.divisions?.find(div => div.name === selectedDivision)?.districts?.map(district => (
                                    <option key={district.name} value={district.name}>{district.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="stat">
                            <div className="stat-title uppercase text-white font-extrabold text-center my-4" id='upazila'>Upazila *</div>
                            <select onChange={handleTownChange} id='upazila' className="p-2 border rounded">
                                <option value="">Select Upazila </option>
                                {selectedDistrict && locations?.divisions?.find(div => div.name === selectedDivision).districts.find(dis => dis.name === selectedDistrict).towns.map((town, index) => (
                                    <option key={index} value={town}>{town}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>

                {/* locattion end  */}
                <div className='md:flex w-full  gap-4'>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-address" >
                            <span className="label-text text-xl text-white font-semibold">Address</span>
                        </label>
                        <textarea id="shop-address" type='text' name='address' className="textarea textarea-bordered font-semibold text-xl h-24" placeholder="Full Address" autoComplete="off"></textarea>

                    </div>
                    <div className="form-control w-full">
                        <label className="label" htmlFor="shop-notes" >
                            <span className="label-text text-xl text-white font-semibold">Addition Nots</span>
                        </label>
                        <textarea id='shop-notes' type='text' name='notes' className="textarea textarea-bordered font-semibold text-xl h-24" placeholder="Additional Information" autoComplete="off"></textarea>

                    </div>
                </div>
                {/* error message show  */}
                <div className="label">
                    {error && <p className='text-red-500 rounded-md font-bold bg-white p-2'>{error}</p>}
                </div>
                {/* submit button  */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-2xl">Add Shop</button>
                </div>
            </form>

        </div>


    );
};

export default AddShopLocation;