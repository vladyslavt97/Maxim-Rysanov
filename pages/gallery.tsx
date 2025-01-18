import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";
import Gallery from "@/components/Gallery";
import HorizontalGallery from "@/components/HorizontalGallery";
import Link from "next/link";

type Props = {};

export default function Contacts({}: Props) {
    const images = [
        "/gallery/mr1.jpg",
        "/gallery/mr2.jpg",
        "/gallery/mr3.jpg",
        "/gallery/mr4.jpg",
        "/gallery/mr5.jpg",
        "/gallery/mr6.jpg",
        "/gallery/mr7.jpg",
        "/gallery/mr8.jpg",
        "/gallery/mr9.jpg",
    ];

    const testimonials = images.map((src, index) => ({
        // quote: "I play with my heart",
        // name: `Image ${index + 1}`,
        // designation: "kamermusikverein",
        src: src,
    }));

    return (
        <div className="h-[85vh] flex justify-start md:justify-evenly flex-col text-black bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] px-10 md:px-0">
            <h1 className="font-bold absolute top-[20px] left-1/2 transform -translate-x-1/2">
                Gallery
            </h1>
            <Link
                href="https://www.dropbox.com/scl/fo/4hou5ml1pcpmoy289d6e5/AOYpZrmlXTQhnPNpbBr6hu8?rlkey=0574ls7sfvql89kd3btmo0ro0&st=vy5bscok&dl=0"
                target="_blank"
                className="absolute right-0 top-0"
            >
                <button className="border-2 rounded-2xl p-1 border-yellow-400 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs m-1 hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400 hover:border-yellow-600">
                    Download Photos
                </button>
            </Link>
            {/* <Gallery/> */}
            <HorizontalGallery />
            {/* <AnimatedTestimonials testimonials={testimonials} /> */}
        </div>
    );
}
