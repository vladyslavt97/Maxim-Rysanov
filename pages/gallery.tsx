import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

type Props = {};

export default function Contacts({}: Props) {
    const images = Array.from({ length: 15 }, (_, index) => index + 1);

    const [imagePreview, setImagePreview] = useState("");

    return (
        <div className="h-[85vh] flex justify-start md:justify-evenly flex-col text-black bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] px-10 md:px-0">
            <h1 className="font-bold absolute top-[20px] left-1/2 transform -translate-x-1/2">
                Gallery
            </h1>
            <Link
                href="https://www.dropbox.com/scl/fo/lx6kgxla9x5bliagw06yt/ADDS1iSwk0Y0a8B2A6vcD-8?rlkey=l1smoa75bnwub75tim363gvrz&st=x1o6rhpx&dl=0"
                target="_blank"
                className="absolute right-0 top-0"
            >
                <button className="border-2 rounded-2xl p-1 border-yellow-400 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs m-1 hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400 hover:border-yellow-600">
                    Download Photos
                </button>
            </Link>
            <div
                className="flex flex-row overflow-x-scroll object-contain gap-3 justify-start pl-1 pb-5 overflow-y-hidden scrollbar scrollbar-track-gray-700 scrollbar-thumb-[#303030] mx-5 md:mx-24 h-[350px] absolute top-1/2 -translate-y-1/2 "
                style={{ overflowY: "hidden" }}
            >
                {images.map((im: number) => (
                    <div
                        key={im}
                        className="flex-shrink-0 cursor-pointer"
                        onClick={(e) =>
                            setImagePreview(`/gallery/mr${im.toString()}.jpg`)
                        }
                    >
                        <Image
                            src={`/gallery/mr${im.toString()}.jpg`}
                            alt="images"
                            width={300}
                            height={300}
                            priority={true}
                            loading="eager"
                            className="rounded shadow-black shadow-lg h-[300px] w-[200px] object-cover object-top"
                        />
                    </div>
                ))}

                {imagePreview !== "" && (
                    <div className="absolute top-0 left-0 w-full h-full z-60">
                        <Image
                            src={imagePreview}
                            alt="imagesPreview"
                            width={500}
                            height={1000}
                            priority={true}
                            loading="eager"
                            className="z-60"
                        />
                    </div>
                )}
            </div>
            {imagePreview !== "" && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/30 z-10 pointer-events-auto"
                    onClick={(e) => setImagePreview("")}
                />
            )}
        </div>
    );
}
