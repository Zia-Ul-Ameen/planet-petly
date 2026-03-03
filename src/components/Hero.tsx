"use client";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full overflow-hidden"
            aria-label="Hero section"
        >
            <h1 className="sr-only">Planet Petly - Eco-Friendly Poop Bag Holders & Sustainable Pet Products</h1>
            <div className="w-full relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <video
                    src="/heroVideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}
