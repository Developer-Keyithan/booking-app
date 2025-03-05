"use client"

import { ChevronDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div
            id="hero"
            className={`text-white flex flex-col items-center justify-center bg-[url('/lotus-tower.jpg')] bg-cover bg-center h-max py-8`}
        >
            <div className="container mx-auto flex flex-col gap-12 justify-center items-start py-36">
                <h1 className="text-[5rem] font-semibold w-full pr-[30rem]">Explore Sri Lanka in Comfort</h1>
                <p className="text-lg w-full pr-[50rem]">Experience the beauty of Sri Lanka with our premium van rental service. Book your journey today and create unforgettable memories.</p>
                <Link
                    href="/vans"
                    className="text-center py-4 px-12 font-semibold bg-blue-600 rounded-md"
                >
                    Book Now
                </Link>
            </div>
            <Link
                href="#about"
                className="h-16 w-16 bg-blue-600 rounded-full px-2 pt-[10px] animate-bounce"
            >
                <ChevronDown className="h-12 w-12"/>
            </Link>
        </div>
    );
};

export default HeroSection;
