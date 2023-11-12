"use client";

import { useState, useEffect, use } from "react";
import Card from "./card";

interface Hotel {
    id: number;
    name: string;
    address: string;
    price: number; 
    rating: number; 
    description: string;
    image: string;
    imageCreds: string;
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
            <h1 className="hotel-title">Hotels</h1>
            <ul className="card-wrapper">
                {hotels.map((hotel) => (
                    <Card key={hotel.id} hotel={hotel}  />
                ))}
            </ul>
        </div>
    );
}

export default Hotels;
