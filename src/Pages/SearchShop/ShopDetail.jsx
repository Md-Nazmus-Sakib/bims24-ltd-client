import React from 'react';
import './ShopDetail.css'
import shopIcon from '../../assets/Image/shopIcon.png'
import location from '../../assets/Image/location.png'
import mobileIcon from '../../assets/Image/mobile.png'
import ownerIcon from '../../assets/Image/owner.png'

const ShopDetail = ({ shop }) => {
    const { address, alterMobile, email, mobile, notes, ownerName, selectedDivision, selectedDistrict, selectedTown, shopName } = shop;
    // console.log(shop)
    return (


        <div className='flex justify-center my-12'>
            <div className="red-btn w-full md:w-2/3 lg:w-1/2 py-6 sm:p-10 ">
                <div className='flex justify-center gap-4 border-b-2'>
                    <img className='w-10 h-10' src={shopIcon} alt="shopIcon" />
                    <h1 className='text-center text-4xl mb-4 '>{shopName}</h1>
                </div>

                {ownerName && <div className='flex justify-start items-center gap-4 mt-4'>
                    <img className='w-10' src={ownerIcon} alt="location" />
                    <p >Owner Name: <span className='text-slate-300 text-base'>{ownerName}</span></p>
                </div>}

                {address && <div className='flex justify-start items-center gap-4'>
                    <img className='w-10' src={location} alt="location" />
                    <p>Shop Address: <span className='text-slate-300 text-base'>{address},  Upazila : {selectedTown}, District : {selectedDistrict}</span></p>
                </div>}
                {mobile && <div className='flex justify-start items-center gap-4'>
                    <img className='w-10' src={mobileIcon} alt="mobileIcon" />
                    <p>Mobile: <span className='text-slate-300 text-base'>{mobile}</span></p>
                    {alterMobile && <p>, <span className='text-slate-300 text-base'>{alterMobile}</span></p>}
                </div>}
                {/* <div>
                    <p>Division : <span className='text-slate-300 text-base'>{selectedDivision}</span> , District : <span className='text-slate-300 text-lg'>{selectedDistrict}</span>, Upazila :<span className='text-slate-300 text-lg'> {selectedTown}</span> </p>
                </div> */}
            </div>
        </div>

    );
};

export default ShopDetail;



// address
// :
// "Shamsur rahman khan pouro super market"
// alterMobile
// :
// ""
// email
// :
// ""
// mobile
// :
// "01818462774"
// notes
// :
// ""
// ownerName
// :
// "Eyachir Arafat Roni"
// selectedDistrict
// :
// "Dhaka"
// selectedDivision
// :
// "Dhaka"
// selectedTown
// :
// "Savar"
// shopName
// :
// "Ak mobile galary"
// userEmail
// :
// "asdf@asd.com"