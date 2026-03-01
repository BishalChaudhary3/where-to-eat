"use client";

import { useState , useRef, useEffect } from "react";

export default function DishInput({ location, setSelectedDish }) {
    const [input, setInput] = useState("");

    const disabled = !location;

    const inputRef = useRef(null);

    useEffect(() => {
        if (location && inputRef.current) {
            inputRef.current.focus();
        }
    }, [location]);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        setSelectedDish(input.trim());
        setInput("");
    };

    return (
        <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">
                What do you want to eat?
            </h2>

            <form onSubmit={handleSubmit} className="flex justify-center gap-2">
                <input
                    type="text"
                    placeholder="e.g. Biryani, Pizza, Momos..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={disabled}
                    className={`
            px-5 py-3 rounded-2xl border 
            w-full max-w-md outline-none
            ${disabled
                            ? "bg-gray-100 cursor-not-allowed"
                            : "focus:ring-2 focus:ring-black"}
          `}
                />

                <button
                    type="submit"
                    disabled={disabled}
                    className={`
            px-6 py-3 rounded-2xl font-medium transition
            ${disabled
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-black text-white hover:bg-gray-800"}
          `}
                >
                    Search
                </button>
            </form>

            {disabled && (
                <p className="text-sm text-gray-500 mt-3">
                    Detect your location first 📍
                </p>
            )}
        </div>
    );
}