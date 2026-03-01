"use client";

import RestaurantCard from "./RestaurantCard";


export default function Results({ dish }) {

  // Dummy data for now
  const restaurants = [
    {
      id: 1,
      name: "Spicy Delight",
      rating: 4.6,
      reviews: 1240,
      distance: "1.2 km",
    },
    {
      id: 2,
      name: "Food Paradise",
      rating: 4.4,
      reviews: 980,
      distance: "2.1 km",
    },
    {
      id: 3,
      name: "Royal Bites",
      rating: 4.7,
      reviews: 1530,
      distance: "0.9 km",
    },
  ];

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Best {dish} near you
      </h2>

      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
}