import React from "react";
import recordings from "../recordings.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function RecordingsList({}: Props) {
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
        <div className="flex flex-row flex-wrap justify-center my-24">
            <h1 className="text-center font-bold text-2xl text-gray-500">
                Recordings
            </h1>
            {recordings.map((r) => (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    key={r.imageSrc}
                    className="mb-10 mt-5 mx-10 hover:scale-105 transition-transform duration-2000 shadow-xl rounded-2xl bg-gray-300"
                >
                    <Image
                        src={r.imageSrc}
                        alt={r.imageSrc}
                        width={300}
                        height={300}
                        className="rounded-2xl"
                        loading="eager"
                    />
                    <div className="flex flex-col italic hover:font-semibold hover:text-gray-500">
                        <div className="flex flex-row items-center">
                            {(r.applemusic || r.spotify) && 
                                <h1 className="text-sm px-1 text-black">
                                    Stream here:
                                </h1>}
                            {r.applemusic && (
                                <Link href={r.applemusic}>
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
                                <Link href={r.spotify}>
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
                                <Link href={r.hyperion}>
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
                                <Link href={r.bis}>
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
                                <Link href={r.onyx}>
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
                                <Link href={r.avie}>
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
                                <Link href={r.decca}>
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
                                <Link href={r.ecm}>
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
                                <Link href={r.warner}>
                                    <Image
                                        src="/warner.png"
                                        alt="logo"
                                        width={70}
                                        height={70}
                                        className="pl-5 object-contain py-2"
                                        loading="eager"
                                    />
                                </Link>
                            )}
                            {r.orchid && (
                                <Link href={r.orchid}>
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
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
