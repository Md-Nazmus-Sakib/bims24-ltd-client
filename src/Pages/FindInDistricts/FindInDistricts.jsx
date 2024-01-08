import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import District from './District';

const FindInDistricts = () => {
    const { districtName } = useParams();
    // console.log(districtName)
    const [locationName, setLocationName] = useState([]);
    // console.log(locationName.divisions)
    const districts = locationName?.divisions?.find(location => location.name === districtName);
    // console.log(districts?.districts)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/locationData.json');
                const data = await response.json();
                setLocationName(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className='my-12 bg-black'>
            {
                districts?.districts && districts.districts.map((dis, index) => <District key={index} dis={dis}></District>)
            }
        </div>
    );
};

export default FindInDistricts;