export default function RestaurantCard({ data }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 flex justify-between items-center hover:shadow-xl transition">
  
        <div>
          <h3 className="text-gray-600 font-semibold">
            {data.name}
          </h3>
  
          <p className="text-gray-600 mt-1">
            ⭐ {data.rating} ({data.reviews} reviews)
          </p>
  
          <p className="text-gray-500 text-sm mt-1">
            📍 {data.distance}
          </p>
        </div>
  
        <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
          Directions
        </button>
  
      </div>
    );
  }