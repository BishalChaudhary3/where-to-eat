export default function Loader() {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white/70 rounded-2xl p-6 animate-pulse"
          >
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }