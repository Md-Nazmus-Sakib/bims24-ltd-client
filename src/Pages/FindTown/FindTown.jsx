import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FindTown = () => {
    const { cityName } = useParams();
    const [townNames, setTownNames] = useState([]);
    console.log(townNames?.divisions)
    // const districts = locationName?.divisions?.find(location => location.name === districtName);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../public/locationData.json');
                const data = await response.json();
                setTownNames(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div>

        </div>
    );
};

export default FindTown;