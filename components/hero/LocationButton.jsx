"use client";

import { useState } from "react";

export default function LocationButton({ onLocationDetected }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        onLocationDetected(coords);
        setLoading(false);
        setSuccess(true);
      },
      (err) => {
        setLoading(false);

        if (err.code === 1) {
          setError("Location permission denied.");
        } else if (err.code === 2) {
          setError("Location unavailable.");
        } else {
          setError("Something went wrong.");
        }
      }
    );
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={detectLocation}
        className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all"
      >
        {loading ? "Detecting..." : "Detect My Location 📍"}
      </button>

      {success && (
        <p className="text-green-600 text-sm">
          Location detected successfully 
        </p>
      )}

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}