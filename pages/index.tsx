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
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const container = document.querySelector("main");
        if (!container) return;

        const handleScroll = () => {
            setHasScrolled(container.scrollTop > 8);
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
            className={`${inter.className} relative min-h-[calc(100vh-123px)] overflow-hidden text-black`}
        >
            <div className="pointer-events-none fixed inset-0 -z-10">
                <Image
                    src="/homemr.png"
                    alt="Maxim Rysanov conducting"
                    fill
                    priority
                    className="object-contain object-center scale-[0.72] md:scale-[0.82]"
                />
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-amber-50/55 transition duration-600 ${
                        hasScrolled
                            ? "backdrop-blur-[5px] md:backdrop-blur-0"
                            : "backdrop-blur-none"
                    }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,0,0,0.08),transparent_32%),radial-gradient(circle_at_82%_15%,rgba(255,193,127,0.28),transparent_30%)]" />
            </div>

            <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-start gap-10 px-4 pb-10 pt-12 md:px-10 md:pt-16 lg:px-14 lg:pt-20">
                {/* <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em]">
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-lg backdrop-blur-md">
                        <span className="text-amber-700">Grammy-nominated</span>
                        <span className="h-1 w-1 rounded-full bg-amber-600/80" />
                        <span className="tracking-[0.22em] text-black">
                            Violist & conductor
                        </span>
                    </div>
                </div> */}

                <div className="mt-64 flex flex-col items-start justify-around gap-8 md:gap-80 md:mt-6 md:flex-row lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="space-y-7 md:w-[55%]"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-white/50 p-6 shadow-xl backdrop-blur-md">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-amber-200/20 to-amber-100/35" />
                            <div className="relative space-y-3 text-black">
                                <h1
                                    className={`${playfair.className} text-3xl leading-tight drop-shadow-[0_20px_70px_rgba(255,255,255,0.6)] md:text-5xl`}
                                >
                                    Maxim Rysanov
                                </h1>
                                <p className="max-w-2xl text-base leading-relaxed md:text-lg">
                                    Grammy-nominated Ukrainian-British violist
                                    and conductor whose vivid colors and
                                    charismatic energy light up concert halls
                                    and the studio alike.
                                </p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-white/50 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-amber-200/20 to-amber-100/35" />
                            <div className="relative flex flex-col gap-5">
                                <p
                                    className={`${playfair.className} text-lg leading-relaxed text-black`}
                                >
                                    He conducted so fantastically that I
                                    realized we were dealing with an
                                    exceptionally great conductor, someone truly
                                    worthy of our admiration — and that’s
                                    remarkable considering he’s also one of the
                                    greatest living violists.
                                </p>
                                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-black">
                                    <span className="h-px w-8 bg-amber-700" />
                                    <span>Bartok Radio Concert Review</span>
                                    <span className="text-black/80">
                                        Kristóf Csengery
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm font-semibold text-black">
                            <Link
                                href="/concerts"
                                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-amber-200/20 to-amber-100/35 px-5 py-3 tracking-wide shadow-lg backdrop-blur-md transition duration-200 hover:bg-white/95"
                            >
                                <span>Upcoming concerts</span>
                                <span className="text-amber-700 transition duration-200 group-hover:translate-x-0.5">
                                    →
                                </span>
                            </Link>
                            {/* <Link
                href="/recordings"
                className="inline-flex items-center gap-3 rounded-full bg-amber-200/90 px-5 py-3 tracking-wide text-sm text-black shadow-lg transition duration-200 hover:bg-amber-100"
              >
                Hear the recordings
              </Link> */}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.35 }}
                        className="flex flex-col gap-4 md:w-[45%]"
                    >
                        <div className="group relative overflow-hidden rounded-2xl bg-white/50 p-5 shadow-xl backdrop-blur-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-amber-200/20 opacity-0 transition duration-600 group-hover:opacity-100" />
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
                                        className={`${playfair.className} text-base leading-relaxed text-black`}
                                    >
                                        It’s wonderful to find a recording like
                                        this; one that, as soon as it finishes,
                                        you want to start it all over again.
                                    </p>
                                    <div className="text-xs uppercase tracking-[0.18em] text-black">
                                        BBC Music Magazine Chamber Choice
                                    </div>
                                    <div className="text-[11px] text-black/80">
                                        Christmas Issue, December 2024
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-white/50 p-5 shadow-xl backdrop-blur-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-amber-200/20 opacity-0 transition duration-300 group-hover:opacity-100" />
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
                                        className={`${playfair.className} text-base leading-relaxed text-black`}
                                    >
                                        The colours and contrasts that Rysanov
                                        manages to extract from the orchestra
                                        are truly fabulous!
                                    </p>
                                    <div className="text-xs uppercase tracking-[0.18em] text-black">
                                        Crescendo Magazine
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
