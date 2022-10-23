import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSummaryCard from '../Shared/HotelSummaryCard/HotelSummaryCard';



const Home = () => {
    const allHotels = useLoaderData();
    console.log(allHotels);
    return (
        <div className='grid grid-cols-3'>
            {
                allHotels.map(hotel => <HotelSummaryCard
                    key={hotel.id}
                    hotel={hotel}
                ></HotelSummaryCard>)
            }
        </div>
    );
};

export default Home;