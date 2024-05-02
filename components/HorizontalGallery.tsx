import React from 'react';
import Image from "next/image";

type Props = {}

export default function HorizontalGallery({}: Props) {
    const images = ["/gallery/mr1.jpg", "/gallery/mr2.jpg", "/gallery/mr3.jpg", "/gallery/mr4.jpg", "/gallery/mr5.jpg", "/gallery/mr6.jpg", "/gallery/mr7.jpg", "/gallery/mr8.jpg", "/gallery/mr9.jpg"];
    
    return (
        <div className='flex flex-row overflow-x-scroll object-contain gap-1 justify-start pl-1 pb-5 overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#303030]/80 mx-52 h-[350px]' style={{ overflowY: 'hidden' }}>
            {images.map((im: string, index: number) => (
                <div key={index} className="flex-shrink-0" >
                    <Image
                        src={im}
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
