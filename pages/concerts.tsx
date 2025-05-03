import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import PastConcerts from "@/components/PastConcerts";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import {
  calculateTodaysDate,
  findClosestEventInTheFuture,
  sortingConcerts,
} from "@/date";
import { ConcertType } from "@/interfaces";

export async function getStaticProps() {
  let concerts = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-concerts`
    );
    concerts = await response.json();
  } catch (error) {
    console.error("Error fetching concerts:", error);
  }

  return {
    props: {
      initialConcerts: concerts,
    },
    revalidate: 60,
  };
}

export default function Concerts({
  initialConcerts,
}: {
  initialConcerts: ConcertType[];
}) {
  const [concerts, setConcerts] = useState<ConcertType[]>([]);
  const [cheing, setChecing] = useState(false);
  const [smN, setSmn] = useState<any>();

  const divRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    setConcerts(initialConcerts);
  }, [initialConcerts]);

  let validConcerts = sortingConcerts(concerts);

  //Todays date generated in the following format 17/06
  const today = calculateTodaysDate();

  //this useEffect takes the concerts and todays date and finds the most recent index: smallestNumber, and then updates smN state.
  useEffect(() => {
    let closestDate = findClosestEventInTheFuture(
      concerts,
      validConcerts,
      today
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

    const scrollOffset = targetTop - containerTop + container.scrollTop - 20;
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
      className="relative text-black flex flex-col items-center overflow-y-auto h-full "
    >
      <PastConcerts />
      <div className="absolute left-6 md:static md:flex md:justify-center md:items-center pt-5">
        <h1 className="font-bold text-xl text-gray-800">2025</h1>
      </div>
      {concerts.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col mt-16 md:mt-5 ml-2 justify-center items-start mb-32 lg:text-xl"
        >
          {validConcerts.map(
            (concert: ConcertType, index: number) =>
              !concert.pastconcert && (
                <div
                  key={index}
                  ref={(el) => (divRefs.current[index] = el)}
                  className={`mx-3 mb-6 ${
                    smN === index &&
                    "bg-gray-500/30 py-1 pl-2 pr-5 rounded shadow-lg"
                  } ${
                    concert.canceled &&
                    "text-gray-400 bg-red-100/10 py-3 pl-1 pr-5 rounded shadow-lg"
                  }`}
                >
                  {smN === index && (
                    <div
                      className={`${
                        concert.canceled
                          ? "hidden"
                          : "relative mb-2 -right-3 top-0"
                      }`}
                    >
                      <h1 className="text-gray-100 absolute -right-3 -top-2 text-xs bg-slate-700 transform -skew-x-12 px-1 py-[1px] rounded tracking-wider shadow-lg">
                        <span className="block transform skew-x-12">
                          Next Event
                        </span>
                      </h1>
                    </div>
                  )}
                  {concert.canceled && (
                    <h1 className="text-sm italic text-red-700">Canceled</h1>
                  )}
                  <div className="flex flex-row">
                    <h2 className=" font-semibold">{concert.date}</h2>
                    <div className="flex flex-row items-center text-gray-700 text-xs">
                      &nbsp;
                      {concert.viola && <h2>Viola</h2>}
                      &nbsp;
                      {concert.viola && concert.conductor && "&"}
                      &nbsp;
                      {concert.conductor && <h2>Conductor</h2>}
                    </div>
                  </div>
                  {concert.location && (
                    <h5 className="text-[17px]">{concert.location}</h5>
                  )}
                  {concert.programme.map((prog, ind) => (
                    <div key={ind} className=" text-[15px]">
                      <p>{prog}</p>
                    </div>
                  ))}
                  {concert.withwhom && (
                    <h4
                      className={`${
                        concert.canceled ? "text-gray-400" : "text-gray-800"
                      }`}
                    >
                      with{" "}
                      {concert.withwhom.split(";").map((person, index) => (
                        <span key={index}>
                          {person.trim()}
                          <br />
                        </span>
                      ))}
                    </h4>
                  )}

                  {concert.link && (
                    <Link href={concert.link}>
                      <span
                        className={`italic underline z-10 font-serif ${
                          concert.canceled && "text-gray-400"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        more details
                      </span>
                    </Link>
                  )}
                </div>
              )
          )}
        </motion.div>
      )}
    </div>
  );
}
