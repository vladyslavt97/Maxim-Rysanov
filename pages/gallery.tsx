import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

type Props = {};

export default function Contacts({}: Props) {
    const images = Array.from({ length: 21 }, (_, index) => index);

    const [imagePreview, setImagePreview] = useState("");

    return (
        <div className="flex justify-start flex-col text-black w-full relative">
            <Link
                href="https://www.dropbox.com/scl/fo/lx6kgxla9x5bliagw06yt/ADDS1iSwk0Y0a8B2A6vcD-8?rlkey=l1smoa75bnwub75tim363gvrz&st=x1o6rhpx&dl=0"
                target="_blank"
                className="absolute right-0 top-0"
            >
                <button className="border-2 w-[70px] rounded-2xl p-1 border-yellow-400 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs m-1 hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400 hover:border-yellow-600">
                    Download Photos
                </button>
            </Link>
            <div className="flex justify-center items-center pt-5 mb-20">
                <h1 className="font-bold text-md text-gray-800">Gallery</h1>
            </div>

            <div
                className="flex overflow-x-scroll object-contain gap-3 justify-start pl-1 overflow-y-hidden scrollbar scrollbar-track-gray-700 scrollbar-thumb-[#303030] mx-10 my-auto h-full"
                style={{ overflowY: "hidden" }}
            >
                {images.map((im: number) => (
                    <div
                        key={im}
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() =>
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
                            className="rounded shadow-black shadow-lg h-[60vh] max-h-[300px] w-[200px] object-cover object-top"
                        />
                    </div>
                ))}
            </div>

            {/* Image Preview */}
            {imagePreview !== "" && (
                <div
                    className="fixed top-0 z-50 flex justify-center items-center h-screen w-screen left-0"
                    onClick={() => setImagePreview("")}
                >
                    <>
                        {/* Close Button in Top-Right Corner */}
                        <button
                            className="absolute top-20 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent closing when clicking the button
                                setImagePreview("");
                            }}
                        >
                            <span className="text-xl font-bold">X</span>
                        </button>

                        <Image
                            src={imagePreview}
                            alt="imagesPreview"
                            width={500}
                            height={800}
                            priority={true}
                            loading="eager"
                            className="h-[600px] object-contain p-10"
                        />
                    </>
                </div>
            )}
            {/* Overlay */}
            {imagePreview !== "" && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black/80 z-40 pointer-events-auto"
                    onClick={() => setImagePreview("")}
                />
            )}
        </div>
    );
}
