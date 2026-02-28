"use client";

import Container from "../layout/Container";
import Button from "../ui/Button";
import FloatingBackground from "../ui/FloatingBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 bg-gray-50 text-center">

      {/* Background Layer */}
      <FloatingBackground />

      {/* Content Layer */}
      <div className="relative z-10">
        <Container>
          <h1 className="text-5xl text-gray-600 sm:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Stop Searching.
            <br />
            Start Eating.
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto">
            Find the best specific dish near you —
            ranked by real ratings and reviews.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Detect my Location</Button>
            <Button>What do you want to eat</Button>
          </div>
        </Container>
      </div>

    </section>
  );
}