import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="relative mt-24">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

            <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

            <div
                className="absolute inset-0 -z-10 bg-gradient-to-tr 
                from-purple-500/5 via-transparent to-blue-500/5 
                dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center sm:text-left justify-items-center sm:justify-items-start">

                    <div className="space-y-4 flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/tiles.jpg"
                                alt="tiles logo"
                                width={60}
                                height={60}
                                className="dark:brightness-200"
                            />
                            <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                                Tiles Gallery
                            </h2>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                            Create production-ready AI visuals in seconds. Built for speed,
                            scale, and creativity.
                        </p>
                    </div>

                    <div className="w-full">
                        <h3 className="text-sm font-bold text-black dark:text-white mb-5 uppercase tracking-wider">
                            Product
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/generate" className="hover:text-black dark:hover:text-white transition">Generate</Link></li>
                            <li><Link href="/all-photos" className="hover:text-black dark:hover:text-white transition">Gallery</Link></li>
                            <li><Link href="/pricing" className="hover:text-black dark:hover:text-white transition">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <h3 className="text-sm font-bold text-black dark:text-white mb-5 uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/about" className="hover:text-black dark:hover:text-white transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition">Contact</Link></li>
                            <li><Link href="/terms" className="hover:text-black dark:hover:text-white transition">Terms</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4 flex flex-col items-center sm:items-start w-full">
                        <h3 className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">
                            Start creating
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Generate your first AI image today.
                        </p>

                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full 
                            bg-black text-white dark:bg-white dark:text-black 
                            text-sm font-semibold transition-all duration-200 
                            hover:scale-[1.05] active:scale-95 shadow-md hover:shadow-xl"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                    <p className="order-2 md:order-1">
                        © {new Date().getFullYear()} pixgen. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8 order-1 md:order-2 font-medium">
                        <Link href="/privacy" className="hover:text-black dark:hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black dark:hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;