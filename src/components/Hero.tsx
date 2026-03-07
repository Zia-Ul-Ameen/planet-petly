"use client";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full h-[50vh] md:h-[80vh] mt-[74px] overflow-hidden flex flex-col"
            aria-label="Hero section"
        >
            {/* Screen-reader heading */}
            <h1 className="sr-only">Planet Petly – Quality Pet Food</h1>

            {/* Background Video */}
            <video
                src="/heroVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
            />

            {/* Dark Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/30"
                aria-hidden="true"
            />

        </section>
    );
}
