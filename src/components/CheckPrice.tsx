'use client'

import { useState } from 'react';

export default function CheckPrice({ price }: { price: number }) {
    const [currentPrice, setCurrentPrice] = useState(0);

    const ShowPrice = () => {
        setCurrentPrice(price);
    }

    return (
        <div>
            {currentPrice !== 0 && <h1 className="text-green-500">Price: {currentPrice}</h1>}
            <button onClick={ShowPrice}>Check Price</button>
        </div>
    );
}
