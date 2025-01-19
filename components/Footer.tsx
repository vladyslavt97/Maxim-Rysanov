import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type Props = {};

export default function Footer({}: Props) {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const togglePopup = () => {
        setShowPopup((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            popupRef.current &&
            !popupRef.current.contains(event.target as Node)
        ) {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    return (
        <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-evenly items-center border-t-[10px] border-r-[10px] border-l-[10px] border-gray-300 h-[51px]">
            <Link href="https://www.instagram.com/mrysanov_viola_conductor">
                <Image
                    src="/social/instagram.png"
                    alt="logo"
                    width={30}
                    height={20}
                    priority={true}
                />
            </Link>
            <div className="relative top-1">
                <button onClick={togglePopup}>
                    <Image
                        src="/social/youtube.png"
                        alt="logo"
                        width={30}
                        height={20}
                        priority={true}
                    />
                </button>
                {showPopup && (
                    <div
                        ref={popupRef}
                        className="absolute bottom-[40px] left-[-60px] bg-gray-300 text-black px-5 py-0 rounded-md shadow-md z-50 flex items-center gap-3"
                    >
                        <Link
                            href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            onClick={togglePopup}
                        >
                            Conducting
                        </Link>
                        <div className="h-8 w-[1px] bg-gray-500"></div>
                        <Link
                            href="https://www.youtube.com/@MaximRysanov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            onClick={togglePopup}
                        >
                            Channel
                        </Link>
                    </div>
                )}
            </div>
            <Link href="https://www.facebook.com/maximrysanov">
                <Image
                    src="/social/facebook.png"
                    alt="logo"
                    width={30}
                    height={20}
                    priority={true}
                />
            </Link>
        </div>
    );
}
