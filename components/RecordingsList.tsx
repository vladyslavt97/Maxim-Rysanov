import React, { useEffect, useMemo, useState } from "react";
import recordings from "../recordings.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

type Recording = {
  newrelease?: string;
  imageSrc: string;
  applemusic?: string;
  spotify?: string;
  hyperion?: string;
  orchid?: string;
  bis?: string;
  onyx?: string;
  warner?: string;
  ecm?: string;
  decca?: string;
  avie?: string;
  hungaroton?: string;
};

export default function RecordingsList({}: Props) {
  const [coversReady, setCoversReady] = useState(false);

  const SkeletonCard = () => (
    <div className="mb-10 mt-5 mx-10 shadow-xl rounded-2xl bg-gray-200 relative overflow-hidden">
      <div className="h-[300px] w-[300px] rounded-2xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
      <div className="flex flex-col gap-2 p-4">
        <div className="h-4 w-24 rounded bg-gray-300 animate-pulse" />
        <div className="h-4 w-16 rounded bg-gray-300 animate-pulse" />
      </div>
    </div>
  );

  const coverSources = useMemo(
    () => Array.from(new Set(recordings.map((r: Recording) => r.imageSrc))),
    []
  );

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const preloadPromises = coverSources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      );

      await Promise.all(preloadPromises);
      if (isMounted) {
        setCoversReady(true);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [coverSources]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const figureOut = (val: string) => {
    if (val.includes("/bis.se")) {
      return `/BIS.png`;
    } else if (val.includes("/warnerclassics.")) {
      return `/ONYX.png`;
    } else if (val.includes("/ecmrecords.com/")) {
      return `/ECM.png`;
    } else if (val.includes("/www.deccaclassics.com/")) {
      return `/DECCA.png`;
    } else if (val.includes("/onyxclassics.com/")) {
      return `/ONYX.png`;
    } else if (val.includes("/www.avie-records.com/")) {
      return `/AVIE.png`;
    }
  };
  return (
    <div className="flex flex-row flex-wrap justify-center py-24 overflow-y-hidden">
      <h1 className="text-center font-bold text-xl text-gray-500">
        Recordings
      </h1>
      {!coversReady && (
        <div className="flex flex-row flex-wrap justify-center w-full">
          {recordings.map((r: Recording) => (
            <div
              key={`skeleton-${r.imageSrc}`}
              className="hover:scale-110 transition-transform duration-2000"
            >
              <SkeletonCard />
            </div>
          ))}
        </div>
      )}
      {coversReady && recordings.map((r: Recording) => (
        <div
          key={r.imageSrc}
          className="hover:scale-110 transition-transform duration-2000"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 mt-5 mx-10 shadow-xl rounded-2xl bg-gray-300 relative"
          >
            {r.newrelease && (
              <div className=" bg-blue-400 -skew-x-12 transform absolute -top-4 -left-4 text-white px-1 rounded">
                New Release
              </div>
            )}
            <Image
              src={r.imageSrc}
              alt={r.imageSrc}
              width={1000}
              height={1000}
              className="rounded-2xl w-[300px] h-[300px]"
              loading="eager"
              priority={true}
            />
            <div className="flex flex-col italic hover:font-semibold hover:text-gray-500">
              <div className="flex flex-row items-center">
                {(r.applemusic || r.spotify) && (
                  <h1 className="text-sm px-1 text-black">Stream here:</h1>
                )}
                {r.applemusic && (
                  <Link
                    href={r.applemusic}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/applemusic.png"
                      alt="logo"
                      width={50}
                      height={50}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.spotify && (
                  <Link
                    href={r.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/spotify.png"
                      alt="logo"
                      width={50}
                      height={50}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.hyperion && (
                  <Link
                    href={r.hyperion}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/hyperion.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.bis && (
                  <Link href={r.bis} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/BIS.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.onyx && (
                  <Link href={r.onyx} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/ONYX.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.avie && (
                  <Link href={r.avie} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/AVIE.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.decca && (
                  <Link
                    href={r.decca}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/DECCA.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.ecm && (
                  <Link href={r.ecm} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/ECM.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.warner && (
                  <Link
                    href={r.warner}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/Warner Classics.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.orchid && (
                  <Link
                    href={r.orchid}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/orchid.png"
                      alt="logo"
                      width={70}
                      height={70}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
                {r.hungaroton && (
                  <Link
                    href={r.hungaroton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/hungaroton.png"
                      alt="logo"
                      width={100}
                      height={100}
                      className="pl-5 object-contain py-2"
                      loading="eager"
                    />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
