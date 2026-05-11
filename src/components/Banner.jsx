import React from "react";
import { Button } from "@heroui/react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    Discover Your Perfect <br className="hidden sm:block" />
                    <span className="text-primary-400">Aesthetic</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 mb-8">
                    Explore our curated collection of unique designs and elevate your space with style.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href={"/all-tiles"}><Button className="text-xl font-bold text-white" variant="outline">
                        Browse Now
                    </Button></Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;