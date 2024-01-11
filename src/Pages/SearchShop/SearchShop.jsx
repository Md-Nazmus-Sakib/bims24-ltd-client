import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import repairImg from '../../assets/Image/shop.jpg'

import ShopDetail from './ShopDetail';
const SearchShop = () => {
    const { searchField } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: searchShops = [], isPending: searchShopsLoading, refetch: searchShopsRefetch } = useQuery({
        queryKey: ['searchShops', searchField],
        queryFn: async () => {
            const res = await axiosPublic.get((`/shops/${searchField}`));
            return res.data;
        }
    })
    // console.log(searchShops)
    if (searchShopsLoading) {
        return <div className='flex justify-center items-center w-full h-screen'>
            <span className="loading loading-bars loading-lg text-secondary"></span>
        </div>
    }

    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${repairImg})`, backgroundSize: "cover" }} className='w-full h-screen overflow-y-auto text-white py-8'>
            {
                searchShops.length > 0 ?
                    searchShops?.map(shop => <ShopDetail
                        key={shop._id}
                        shop={shop}
                    ></ShopDetail>

                    ) : <div className='flex justify-center items-center h-full'>
                        <h1 className='text-4xl'>No Shop Is Found !!! Try another Location.</h1>
                    </div>

            }

        </div>
    );
};

export default SearchShop;