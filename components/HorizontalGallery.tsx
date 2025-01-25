import React from "react";
import Image from "next/image";

type Props = {};

export default function HorizontalGallery({}: Props) {
    const images = Array.from({ length: 15 }, (_, index) => index);

    return (
        <div
            className="flex flex-row overflow-x-scroll object-contain gap-3 justify-start pl-1 pb-5 overflow-y-hidden scrollbar scrollbar-track-gray-700 scrollbar-thumb-[#303030] mx-5 md:mx-24 h-[350px] absolute top-1/2 -translate-y-1/2 "
            style={{ overflowY: "hidden" }}
        >
            {images.map((im: number) => (
                <div key={im} className="flex-shrink-0">
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
        </div>
    );
}
