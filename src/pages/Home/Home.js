import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSummaryCard from '../Shared/HotelSummaryCard/HotelSummaryCard';



const Home = () => {
    const allHotels = useLoaderData();
    console.log(allHotels);
    return (
        <div className='mt-20 grid grid-cols-2'>
            <div>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas obcaecati vel laborum consequatur repellat fugit, molestiae voluptates corrupti quam, magni dicta earum eligendi dolorem aspernatur sint recusandae ex ipsam sapiente. Et, corporis dicta error fugiat tenetur sint libero amet blanditiis dolorum! Minus dolorem blanditiis nam, incidunt optio est quidem ipsum quibusdam sunt aut? Cum, rerum culpa autem omnis mollitia magni, distinctio repellat necessitatibus vitae nam natus quibusdam, quo aliquid soluta aspernatur beatae et perspiciatis deserunt velit alias? Cum neque culpa dignissimos sapiente praesentium optio iusto perferendis adipisci rem tempora quisquam, obcaecati, eveniet mollitia fugit omnis molestiae consequuntur laboriosam quod?</h2>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    allHotels.map(hotel => <HotelSummaryCard
                        key={hotel.id}
                        hotel={hotel}
                    ></HotelSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Home;