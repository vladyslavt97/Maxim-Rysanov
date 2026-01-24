import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { MoonLoader } from "react-spinners";
type Props = {};

type GalleryImage = {
    src: string;
    alt: string;
};

export default function Gallery({}: Props) {
    const images: GalleryImage[] = useMemo(
        () =>
            Array.from({ length: 21 }, (_, index) => ({
                src: `/gallery/mr${index}.jpg`,
                alt: `Maxim Rysanov gallery ${index + 1}`,
            })),
        [],
    );

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    const goNext = useCallback(
        () => setCurrentIndex((prev) => (prev + 1) % images.length),
        [images.length],
    );
    const goPrev = useCallback(
        () =>
            setCurrentIndex(
                (prev) => (prev - 1 + images.length) % images.length,
            ),
        [images.length],
    );

    useEffect(() => {
        let isCancelled = false;

        const preloadImages = async () => {
            const loaders = images.map(
                ({ src }) =>
                    new Promise<void>((resolve) => {
                        const img = new window.Image();
                        img.onload = () => {
                            if (typeof img.decode === "function") {
                                img.decode().then(resolve).catch(resolve);
                                return;
                            }
                            resolve();
                        };
                        img.onerror = () => resolve();
                        img.src = src;
                    }),
            );

            await Promise.all(loaders);
            if (!isCancelled) {
                setAllLoaded(true);
            }
        };

        preloadImages();

        return () => {
            isCancelled = true;
        };
    }, [images]);

    useEffect(() => {
        if (isHovering || !allLoaded) return;
        const id = setInterval(goNext, 4000);
        return () => clearInterval(id);
    }, [allLoaded, goNext, isHovering]);

    return (
        <div className="relative flex flex-col items-center justify-start text-black w-full h-screen px-4 py-5 bg-white">
            <Link
                href="https://www.dropbox.com/scl/fo/lx6kgxla9x5bliagw06yt/ADDS1iSwk0Y0a8B2A6vcD-8?rlkey=l1smoa75bnwub75tim363gvrz&st=x1o6rhpx&dl=0"
                target="_blank"
                className="absolute right-2 top-2"
            >
                <button className="italic border-2 rounded-2xl px-4 py-2 border-yellow-400 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs font-semibold shadow-md hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400 hover:border-yellow-600 transition">
                    Download
                </button>
            </Link>

            <div className="flex flex-col items-center gap-2 w-full max-w-6xl">
                <h1 className="font-bold text-lg text-gray-800">Gallery</h1>

                {allLoaded ? (
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div
                            className="relative w-full h-[70vh] min-h-[320px] max-h-[820px] cursor-pointer"
                            onClick={goNext}
                        >
                            <motion.div
                                key={images[currentIndex].src}
                                className="absolute inset-0"
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{
                                    duration: 6,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    fill
                                    priority={true}
                                    unoptimized
                                    loading="eager"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                                    className="object-contain"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                        </div>

                        <button
                            aria-label="Previous image"
                            onClick={goPrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
                        >
                            <HiChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                            aria-label="Next image"
                            onClick={goNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
                        >
                            <HiChevronRight className="h-6 w-6" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-black/40 px-3 py-2 backdrop-blur max-w-[90%]">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    aria-label={`Go to image ${idx + 1}`}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 w-1.5 rounded-full transition ${
                                        currentIndex === idx
                                            ? "bg-white"
                                            : "bg-white/50 hover:bg-white/80"
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <div className="flex h-[60vh] min-h-[320px] w-full max-w-5xl items-center justify-center rounded-3xl bg-slate-900/5 text-xs uppercase tracking-[0.3em] text-gray-500">
                        Loading gallery...
                        <MoonLoader size={30} />
                    </div>
                )}
            </div>
        </div>
    );
}
