import { Inter, Playfair_Display } from "@next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap",
});

export default function Home() {
    const [blurAmount, setBlurAmount] = useState(0);
    const maxBlur = 0; //5
    const blurRange = 0; //240

    useEffect(() => {
        const container = document.querySelector("main");
        if (!container) return;

        const handleScroll = () => {
            const nextBlur =
                Math.min(container.scrollTop / blurRange, 1) * maxBlur;
            setBlurAmount(nextBlur);
        };

        handleScroll();
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${inter.className} relative top-0 min-h-[calc(100vh-123px)] overflow-hidden text-black md:text-white`}
        >
            <div className="pointer-events-none fixed inset-0 z-0">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[url('/homemr.png')] md:bg-[url('/homemrlg.png')] bg-cover bg-center bg-no-repeat shadow-md shadow-[#4b6279]"
                />
                <div
                    className="absolute inset-0 transition-[backdrop-filter] duration-200"
                    style={{
                        backdropFilter: `blur(${blurAmount}px)`,
                        WebkitBackdropFilter: `blur(${blurAmount}px)`,
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto flex h-full flex-col justify-center gap-10">
                <div className="mt-[450px] flex flex-col items-start justify-between gap-8 md:gap-96 md:mt-6 md:flex-row lg:mt-0">
                    <div className="space-y-7 md:w-[55%]">
                        <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white/70 backdrop-blur-[100px] p-2 m-2">
                            <div className="absolute inset-0" />
                            <div className="relative space-y-2">
                                <h1
                                    className={`${playfair.className} text-2xl leading-tight drop-shadow-[0_20px_70px_rgba(255,255,255,0.6)] md:text-5xl`}
                                >
                                    Maxim Rysanov
                                </h1>
                                <p className="max-w-2xl text-base leading-relaxed md:text-md">
                                    Grammy-nominated Ukrainian-British violist
                                    and conductor whose vivid colors and
                                    charismatic energy light up concert halls
                                    and the studio alike.
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl p-2 m-2 shadow-2xl bg-white/70 backdrop-blur-[100px] md:p-8">
                            <div className="absolute inset-0" />
                            <div className="relative flex flex-col gap-5">
                                <p
                                    className={`${playfair.className} text-lg leading-relaxed`}
                                >
                                    He conducted so fantastically that I
                                    realized we were dealing with an
                                    exceptionally great conductor, someone truly
                                    worthy of our admiration — and that’s
                                    remarkable considering he’s also one of the
                                    greatest living violists.
                                </p>
                                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em]">
                                    <span className="h-px w-8 bg-amber-700" />
                                    <span>Bartok Radio Concert Review</span>
                                    <span className="italic">
                                        Kristóf Csengery
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm font-semibold">
                            <Link
                                href="/concerts"
                                className="group inline-flex items-center gap-3 rounded-full px-5 py-3 m-2 tracking-wide shadow-lg bg-white/70 backdrop-blur-[100px] transition duration-200 hover:bg-white/95"
                            >
                                <span>Upcoming concerts</span>
                                <span className="text-amber-700 transition duration-200 group-hover:translate-x-0.5">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:w-[45%]">
                        <div className="group relative overflow-hidden rounded-2xl m-2 p-2 shadow-xl bg-white/70 backdrop-blur-[100px]">
                            <div className="absolute inset-0 opacity-0 transition duration-600 group-hover:opacity-100" />
                            <div className="relative flex flex-col items-start gap-4">
                                <Link
                                    href="/recordings"
                                    className="relative h-20 w-20 overflow-hidden rounded-xl shadow-md transition duration-200 group-hover:scale-105"
                                >
                                    <Image
                                        src="/recordings/schumann.png"
                                        alt="Schumann album cover"
                                        width={80}
                                        height={80}
                                        className="h-full w-full object-cover"
                                        priority
                                    />
                                </Link>
                                <div className="flex flex-col gap-2">
                                    <p
                                        className={`${playfair.className} text-base leading-relaxed`}
                                    >
                                        It’s wonderful to find a recording like
                                        this; one that, as soon as it finishes,
                                        you want to start it all over again.
                                    </p>
                                    <div className="text-xs uppercase tracking-[0.18em]">
                                        BBC Music Magazine Chamber Choice
                                    </div>
                                    <div className="text-[11px]">
                                        Christmas Issue, December 2024
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl m-2 p-2 shadow-xl bg-white/70 backdrop-blur-[100px] mb-10">
                            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
                            <div className="relative flex flex-col items-start gap-4">
                                <Link
                                    href="/recordings"
                                    className="relative h-20 w-20 overflow-hidden rounded-xl shadow-md transition duration-200 group-hover:scale-105"
                                >
                                    <Image
                                        src="/recordings/1_vasks.jpeg"
                                        alt="Vasks album cover"
                                        width={80}
                                        height={80}
                                        className="h-full w-full object-cover"
                                        priority
                                    />
                                </Link>
                                <div className="flex flex-col gap-2">
                                    <p
                                        className={`${playfair.className} text-base leading-relaxed`}
                                    >
                                        The colours and contrasts that Rysanov
                                        manages to extract from the orchestra
                                        are truly fabulous!
                                    </p>
                                    <div className="text-xs uppercase tracking-[0.18em]">
                                        Crescendo Magazine
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
