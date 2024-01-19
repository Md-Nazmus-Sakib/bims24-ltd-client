import React, { useState } from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
const pageSize = 10;
const AllUser = () => {

    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);
    const { data: allUser = [], isPending: allUserLoading, refetch: allUserRefetch } = useQuery({
        queryKey: ['allUser', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?page=${currentPage}`);
            return res.data;
        },
    });
    // console.log(allUser)

    const calculateIndex = (index) => {
        return (currentPage - 1) * pageSize + index + 1;
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        allUserRefetch();
    };
    return (
        <div>
            <div className='  text-center uppercase text-xl font-semibold px-4 my-12 text-white'>
                <h1>All User Info</h1>
                <h2 className='text-xl my-4'>Total User: {allUser?.countUser}</h2>
            </div>
            <div>
                <div className="overflow-auto my-12">
                    <table className="table md:text-xl w-full">
                        {/* head */}
                        <thead>
                            <tr className='md:text-xl text-white'>
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>


                            </tr>
                        </thead>
                        <tbody className='text-slate-200'>
                            {allUser?.users?.map((user, index) => <tr
                                key={user?._id} className="hover-table"
                            >
                                <td >{calculateIndex(index)} </td>
                                <td> <h1>{user?.name}</h1>  </td>
                                <td> <h1>{user?.email}</h1>  </td>

                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>

            <div className='join flex flex-wrap gap-y-4 justify-center items-center my-12'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="join-item btn">
                    Prev
                </button>

                {Array.from({ length: Math.ceil(allUser?.countUser / pageSize) }, (_, index) => (
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
                    disabled={allUser?.users?.length < pageSize}
                    className="join-item btn"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllUser;