import React, { useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import "./AllShop.css"
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
const pageSize = 10;
const AllShop = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);

    const { data: allShops = [], headers, isPending: allShopsLoading, refetch: allShopsRefetch } = useQuery({
        queryKey: ['allShops', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/shops?page=${currentPage}`);

            // console.log(res.data.shops)
            return res.data;
        },
    });
    // console.log(allShops.shops)
    const calculateIndex = (index) => {
        return (currentPage - 1) * pageSize + index + 1;
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        allShopsRefetch();
    };
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
                            allShopsRefetch()
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






    // console.log(allShops)
    if (allShopsLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }

    return (
        <div>
            <div className='  text-center uppercase text-xl font-semibold px-4 my-12 text-white'>
                <h1>All Shop</h1>
                <h2 className='text-xl my-4'>Total Shop: {allShops?.countShop}</h2>
            </div>
            <div>
                <div className="overflow-auto my-12">
                    <table className="table md:text-xl w-full">
                        {/* head */}
                        <thead>
                            <tr className='md:text-xl text-white'>
                                <th>#</th>
                                <th>Shop Name</th>
                                <th>Owner Info</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody className='text-slate-200'>
                            {allShops?.shops?.map((shop, index) => <tr
                                key={shop?._id} className="hover-table"
                            >
                                <td >{calculateIndex(index)} </td>
                                <td> <h1>{shop.shopName}</h1>  </td>
                                <td> <h1>{shop.ownerName}</h1>  </td>
                                <td>{shop?.mobile} </td>
                                <td>{shop?.address}, {shop?.selectedTown}, {shop?.selectedDistrict}.</td>

                                <td className='text-right'>   <button onClick={() => handelDelete(shop?._id)} className='text-right'><FaTrash className='text-red-600 w-6 hover-table'></FaTrash></button></td>

                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>

            <div className='join flex flex-wrap gap-y-4 justify-center items-center my-12'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="join-item btn">
                    Prev
                </button>

                {Array.from({ length: Math.ceil(allShops?.countShop / pageSize) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                        className={`join-item text-white p-4 mx-2  ${currentPage === index + 1 ? 'btn-active font-extrabold' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={allShops?.shops.length < pageSize}
                    className="join-item btn"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllShop;




