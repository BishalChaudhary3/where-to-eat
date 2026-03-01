export default function RestaurantCard({ data }) {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">

      <div className="grid md:grid-cols-2">

        {/* LEFT SIDE - DETAILS */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              {data.name}
            </h3>

            <p className="text-gray-700 mt-3">
              ⭐ {data.rating}
              <span className="text-gray-500 text-sm ml-2">
                ({data.reviews} reviews)
              </span>
            </p>

            <p className="text-gray-500 text-sm mt-2">
              📍 {data.distance}
            </p>
          </div>

          <button className="mt-6 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition w-fit">
            Get Directions →
          </button>
        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="bg-black flex items-center justify-center">

          {data.videoUrl ? (
            <iframe
              className="w-full h-64 md:h-full"
              src={data.videoUrl}
              title="Review Video"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-64 md:h-full flex flex-col items-center justify-center text-white bg-gray-900">
              <p className="text-lg font-medium">
                🎥 No review video found
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Be the first to upload one!
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}