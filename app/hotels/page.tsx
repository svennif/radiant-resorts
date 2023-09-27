'use client'

import { useState, useEffect } from "react";

interface Hotel {
    id: number;
    name: string;
}

function Hotels() {
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() => {
        async function fetchHotels() {
            const res = await fetch("/api/hotels");
            const data = await res.json();
            setHotels(data);
        }

        fetchHotels();
    }, []);

    return (
        <div>
            <h1>Hotels</h1>
            <ul>
                {hotels.map((hotel) => (
                    <li key={hotel.id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hotels;