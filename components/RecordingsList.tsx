import React from "react";
import recordings from "../recordings.json";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex flex-row flex-wrap justify-center my-16">
            {recordings.map((r) => (
                <div
                    key={r.imageSrc}
                    className="my-10 mx-10 hover:scale-105 transition-transform duration-2000"
                >
                    <Image
                        src={r.imageSrc}
                        alt={r.imageSrc}
                        width={300}
                        height={300}
                        className="rounded-2xl"
                    />
                    <Link href={r.href}>
                        <span className="flex flex-row italic hover:font-semibold hover:text-gray-500">
                            Buy music here
                            <Image
                                src={`${figureOut(r.href)}`}
                                alt="logo"
                                width={100}
                                height={100}
                                className="pl-5 object-contain"
                            />
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    );
}