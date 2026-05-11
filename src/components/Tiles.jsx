import { div, h1 } from 'framer-motion/client';
import TilesCard from './TilesCard';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Tiles = async () => {
    const res = await fetch("https://b13-a8-tiles-gallery-3p1e.vercel.app/data.json");
    const tiles = await res.json();
    const someTiles = tiles.slice(0, 9);
    console.log(someTiles);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-12'> Modern Patterns</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr mt-8'>
                {
                    someTiles.map(tile => <TilesCard key={tile.id} tile={tile}></TilesCard>)
                }
            </div>
            <div className='flex justify-center items-center mt-12'>
                <Link href={"/all-tiles"}><Button>View More Product</Button></Link>
            </div>
        </div>
    );
};

export default Tiles;




