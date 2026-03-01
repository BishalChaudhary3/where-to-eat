"use client";

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Loader from "../ui/Loader";


export default function Results({ dish }) {

    const [loading, setLoading] = useState(true);

    // Dummy data for now
    const restaurants = [
        {
            id: 1,
            name: "Bamey's Restro Cafe",
            rating: 4.6,
            reviews: 1240,
            distance: "1.2 km",
            videoUrl: "https://www.youtube.com/embed/nJcTnYKtU0I",
        },
        {
            id: 2,
            name: "Food Paradise",
            rating: 4.4,
            reviews: 980,
            distance: "2.1 km",
            videoUrl: null,
        },
        {
            id: 3,
            name: "Royal Bites",
            rating: 4.7,
            reviews: 1530,
            distance: "0.9 km",
            videoUrl: null,
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // simulate API delay

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Best {dish} near you
            </h2>

            {loading ? (
                <Loader />
            ) : (
                <div className="space-y-6">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} data={restaurant} />
                    ))}
                </div>
            )}
        </div>
    );
}