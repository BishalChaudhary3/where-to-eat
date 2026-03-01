"use client";

import { useState } from "react";
import Container from "../layout/Container";
import FloatingBackground from "../ui/FloatingBackground";
import LocationButton from "./LocationButton";
import DishInput from "./DishInput";
import Results from "../results/Results";

export default function Hero() {
    const [location, setLocation] = useState(null);
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <section className="relative overflow-hidden py-32 text-center">

            <FloatingBackground />

            <div className="relative z-10">
                <Container>

                    <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl mx-auto">
                        Stop Searching.
                        <br />
                        Start Eating.
                    </h1>

                    <p className="mt-6 text-white-600 text-lg max-w-xl mx-auto">
                        Find the best specific dish near you —
                        ranked by real ratings and reviews.
                    </p>

                    <div className="mt-10">
                        <LocationButton onLocationDetected={setLocation} />
                    </div>

                    <DishInput
                        location={location}
                        setSelectedDish={setSelectedDish}
                    />

                    {location && selectedDish && (
                        <Results dish={selectedDish} />
                    )}

                </Container>
            </div>

        </section>
    );
}