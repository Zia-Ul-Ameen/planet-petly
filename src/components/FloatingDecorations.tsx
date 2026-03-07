"use client";

import React from "react";

const RealisticPaw = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        {/* Main pad */}
        <path d="M12,14c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S14.2,14,12,14z" />
        {/* Toes */}
        <circle cx="6.5" cy="11.5" r="2" />
        <circle cx="10" cy="8.5" r="2" />
        <circle cx="14" cy="8.5" r="2" />
        <circle cx="17.5" cy="11.5" r="2" />
    </svg>
);

const RealisticLeaf = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
    </svg>
);

interface DecorationProps {
    type: "paw" | "leaf";
    className?: string;
}

export default function BackgroundDecoration({ type, className = "" }: DecorationProps) {
    return (
        <div
            className={`absolute pointer-events-none select-none opacity-[0.025] grayscale ${className}`}
            style={{ color: "#1a3a2a" }}
            aria-hidden="true"
        >
            {type === "paw" ? <RealisticPaw /> : <RealisticLeaf />}
        </div>
    );
}
