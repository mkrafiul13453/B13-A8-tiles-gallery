"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full border-b bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                         src={"/tiles.jpg"}
                            alt="logo"
                            loading="eager"
                            width={50}
                            height={50}
                            className="object-cover h-auto w-auto" />
                        <h1 className="text-xl font-bold text-black">
                            Tiles Gallery
                        </h1>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-black font-medium transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/all-tiles"
                            className="text-gray-700 hover:text-black font-medium transition"
                        >
                            All Tiles
                        </Link>

                        <Link
                            href="/profile"
                            className="text-gray-700 hover:text-black font-medium transition"
                        >
                            My Profile
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/signup">
                            <button className="px-5 py-2 rounded-lg border border-black text-black hover:bg-black hover:text-white transition">
                                Sign Up
                            </button>
                        </Link>

                        <Link href="/login">
                            <button className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
                                Login
                            </button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl text-black"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden py-4 space-y-4 border-t">

                        <div className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-black font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <Link
                                href="/all-tiles"
                                className="text-gray-700 hover:text-black font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                All Tiles
                            </Link>

                            <Link
                                href="/profile"
                                className="text-gray-700 hover:text-black font-medium"
                                onClick={() => setMenuOpen(false)}
                            >
                                My Profile
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3 pt-3">
                            <Link href="/signup">
                                <button className="w-full px-5 py-2 rounded-lg border border-black text-black hover:bg-black hover:text-white transition">
                                    Sign Up
                                </button>
                            </Link>

                            <Link href="/login">
                                <button className="w-full px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;