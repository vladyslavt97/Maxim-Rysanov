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
                    className="mb-10 mt-5 mx-10 hover:scale-105 transition-transform duration-2000 shadow-xl rounded-lg"
                >
                    <Link href={r.href}>
                        <Image
                            src={r.imageSrc}
                            alt={r.imageSrc}
                            width={300}
                            height={300}
                            className="rounded-2xl"
                            loading="eager"
                        />
                    </Link>
                    <div className="flex flex-col italic hover:font-semibold hover:text-gray-500">
                        <Link href={r.href} className="flex flex-row mt-1">
                            <h1 className="text-sm px-1 text-black">
                                Stream here:
                            </h1>
                            <Image
                                src={`${figureOut(r.href)}`}
                                alt="logo"
                                width={100}
                                height={100}
                                className="pl-3 object-contain"
                                loading="eager"
                            />
                        </Link>

                        <div>
                            {r.applemusic && (
                                <Link href={r.applemusic}>
                                    <Image
                                        src="/applemusic.png"
                                        alt="logo"
                                        width={50}
                                        height={50}
                                        className="pl-5 object-contain"
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
                                        className="pl-5 object-contain"
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
