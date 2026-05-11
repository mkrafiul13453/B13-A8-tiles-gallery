import TilesCard from '@/components/TilesCard';
import React from 'react';

const AllTilesPage = async () => {
    const res = await fetch("https://b13-a8-tiles-gallery-3p1e.vercel.app/data.json");
    const tiles = await res.json();
    // console.log(tiles);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold text-center mt-12'> Modern Patterns</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-8'>
                {
                    tiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;