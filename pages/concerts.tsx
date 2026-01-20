import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import PastConcerts from "@/components/PastConcerts";
import Link from "next/link";
import {
    calculateTodaysDate,
    findClosestEventInTheFuture,
    sortingConcerts,
} from "@/date";
import { ConcertType } from "@/interfaces";
import { getArchiveYears } from "@/lib/pastConcerts";
import clientPromise from "@/lib/mongodb";

export async function getStaticProps() {
    let concerts = [];
    let archiveYears: string[] = [];

    try {
        archiveYears = await getArchiveYears();
    } catch (error) {
        console.error("Error loading archive list:", error);
    }

    try {
        const client = await clientPromise;
        const db = client.db("Maxim_Rysanov");
        const concertsFromDb = await db
            .collection("concerts-2026")
            .find({})
            .sort({ date: 1 })
            .toArray();

        // Ensure the data is serializable for Next.js
        concerts = JSON.parse(JSON.stringify(concertsFromDb));
    } catch (error) {
        console.error("Error fetching concerts:", error);
    }

    return {
        props: {
            initialConcerts: concerts,
            archiveYears,
        },
        revalidate: 60,
    };
}

export default function Concerts({
    initialConcerts,
    archiveYears,
}: {
    initialConcerts: ConcertType[];
    archiveYears: string[];
}) {
    const [concerts, setConcerts] = useState<ConcertType[]>([]);
    const [isLoading, setIsLoading] = useState(
        (initialConcerts ?? []).length === 0,
    );
    const [cheing, setChecing] = useState(false);
    const [smN, setSmn] = useState<any>();

    const divRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        setConcerts(initialConcerts);
        setIsLoading(false);
    }, [initialConcerts]);

    let validConcerts = sortingConcerts(concerts);

    //Todays date generated in the following format 17/06
    const today = calculateTodaysDate();

    //this useEffect takes the concerts and todays date and finds the most recent index: smallestNumber, and then updates smN state.
    useEffect(() => {
        let closestDate = findClosestEventInTheFuture(
            concerts,
            validConcerts,
            today,
        );
        setSmn(closestDate);

        setChecing(true);
    }, [concerts, validConcerts]);

    //the magic useEffect
    //it finds the height of the divs before the needed div
    // I add tree, because its closest visually
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        const target = divRefs.current[smN];
        if (!container || !target) return;

        const containerTop = container.getBoundingClientRect().top;
        const targetTop = target.getBoundingClientRect().top;

        const scrollOffset =
            targetTop - containerTop + container.scrollTop - 20;
        const duration = 3000;
        const start = container.scrollTop;
        const startTime = performance.now();

        const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const nonNullContainer = container; // TypeScript now accepts this as non-null

        function scrollStep(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeInOutQuad(progress);

            nonNullContainer.scrollTop = start + (scrollOffset - start) * ease;

            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }, [cheing, smN]);

    return (
        <div
            ref={scrollContainerRef}
            className="relative text-black flex flex-col items-center overflow-y-auto h-full bg-white"
        >
            <PastConcerts
                archiveYears={archiveYears}
                upcomingHref="/concerts"
                upcomingLabel={`Concerts ${
                    concerts[0]?.year ??
                    initialConcerts[0]?.year ??
                    new Date().getFullYear()
                }`}
            />
            <div className="absolute left-6 pt-5">
                <h1 className="font-bold text-xl text-gray-800">2026</h1>
            </div>
            {isLoading ? (
                <div className="flex items-center justify-center h-[60vh]">
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            "#e15b64",
                            "#f47e60",
                            "#f8b26a",
                            "#abbd81",
                            "#849b87",
                        ]}
                    />
                </div>
            ) : concerts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-[60vh] text-gray-600">
                    <p className="text-lg font-semibold">No concerts found.</p>
                    <p className="text-sm mt-1">
                        Please check back soon for new dates.
                    </p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="flex w-full flex-col items-center mt-28 md:mt-5 mb-32 lg:text-xl"
                >
                    {validConcerts.map(
                        (concert: ConcertType, index: number) =>
                            !concert.pastconcert && (
                                <div
                                    key={index}
                                    ref={(el) => (divRefs.current[index] = el)}
                                    className={`relative mt-10 mx-3 mb-6 w-full max-w-4xl px-4 py-4 md:px-5 text-gray-900 ${
                                        smN === index
                                            ? "ring-1 ring-slate-300/70 shadow-sm"
                                            : ""
                                    }`}
                                >
                                    {smN === index && (
                                        <span className="absolute right-4 top-4 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-600">
                                            Next event
                                        </span>
                                    )}

                                    <div className="flex flex-wrap items-start justify-start gap-3">
                                        <div className="space-y-1">
                                            <div className="text-lg font-semibold">
                                                {concert.date}
                                            </div>
                                        </div>
                                        {(concert.viola ||
                                            concert.conductor) && (
                                            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-gray-500">
                                                {concert.viola && (
                                                    <span className="rounded-full border border-gray-200 px-2 py-1">
                                                        Viola
                                                    </span>
                                                )}
                                                {concert.conductor && (
                                                    <span className="rounded-full border border-gray-200 px-2 py-1">
                                                        Conductor
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-3 h-px bg-gray-100" />

                                    {concert.location && (
                                        <div className="mt-3 grid gap-2">
                                            <div className="text-base text-gray-800">
                                                {concert.location}
                                            </div>
                                        </div>
                                    )}

                                    {concert.programme.length > 0 && (
                                        <div className="mt-3 grid gap-2">
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                {concert.programme.map(
                                                    (prog, progIndex) => (
                                                        <li
                                                            key={progIndex}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <span className="mt-2 h-1 w-1 rounded-full bg-gray-400" />
                                                            <span>{prog}</span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                    {concert.withwhom && (
                                        <div className="mt-3 grid gap-2">
                                            <div className="space-y-1 text-sm text-gray-700">
                                                {concert.withwhom
                                                    .split(";")
                                                    .map(
                                                        (
                                                            person,
                                                            personIndex,
                                                        ) => (
                                                            <div
                                                                key={
                                                                    personIndex
                                                                }
                                                            >
                                                                with{" "}
                                                                {person.trim()}
                                                            </div>
                                                        ),
                                                    )}
                                            </div>
                                        </div>
                                    )}
                                    {concert.link && (
                                        <div className="mt-4 flex justify-end">
                                            <Link href={concert.link}>
                                                <span
                                                    className="text-xs uppercase tracking-[0.3em] underline text-gray-600 hover:text-gray-900"
                                                    onClick={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                >
                                                    More details
                                                </span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ),
                    )}
                </motion.div>
            )}
        </div>
    );
}
