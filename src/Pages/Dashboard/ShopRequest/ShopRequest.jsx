import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ShopRequest = () => {

    const axiosPublic = useAxiosPublic();


    const { data: requestShops = [], headers, isPending: requestShopsLoading, refetch: requestShopsRefetch } = useQuery({
        queryKey: ['requestShops'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/shops/request`);

            // console.log(res.data)
            return res.data;
        },
    });


    const handelRequestApproved = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: 'Approve the Shop !!!!!',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Approve!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/shop/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            requestShopsRefetch();

                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: 'This shop is shown on your shop list.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => console.log(error))
            }
        })
    }





    //delete shop
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/shops/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            requestShopsRefetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Shop has been deleted permanently.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    if (requestShopsLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }
    return (
        <div>
            <div className='  text-center uppercase text-xl font-semibold px-4 my-12 text-white'>
                <h1 className='pb-2 border-b-2'>Requested Shop</h1>

            </div>
            {
                requestShops?.length > 0 ? <div>
                    <div className="overflow-auto my-12">
                        <table className="table md:text-xl w-full">
                            {/* head */}
                            <thead>
                                <tr className='md:text-xl text-white'>
                                    <th>#</th>
                                    <th>Shop Name</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-slate-200'>
                                {requestShops?.map((shop, index) => <tr
                                    key={shop?._id} className="hover-table"
                                >
                                    <td >{(index + 1)} </td>
                                    <td> <h1>{shop.shopName}</h1>  </td>
                                    <td>{shop?.mobile} </td>
                                    <td>{shop?.address}, {shop?.selectedTown}, {shop?.selectedDistrict}.</td>

                                    <td className='text-right'>   <button onClick={() => handelRequestApproved(shop?._id)} className='text-right btn btn-secondary'>Approve</button></td>
                                    <td className='text-right'>   <button onClick={() => handelDelete(shop?._id)} className='text-right'><FaTrash className='text-red-600 w-6 hover-table'></FaTrash></button></td>

                                </tr>)}

                            </tbody>

                        </table>
                    </div>
                </div> :

                    <div className='flex justify-center items-center h-full'>
                        <h1 className='text-4xl text-white'>No pending shop requests are currently awaiting approval.</h1>
                    </div>
            }



        </div>
    );
};

export default ShopRequest;