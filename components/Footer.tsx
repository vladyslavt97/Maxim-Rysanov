import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type Props = {};

export default function Footer({}: Props) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (st: boolean) => {
    setShowPopup(st);
  };

  return (
    <div className="h-[51px] bg-gray-800 text-white flex justify-evenly items-center">
      <Link href="https://www.instagram.com/maximrysanov/">
        <Image
          src="/social/instagram.png"
          alt="logo"
          width={30}
          height={20}
          priority={true}
        />
      </Link>
      <div className="relative top-1">
        <button onClick={(e) => togglePopup(!showPopup)}>
          <Image
            src="/social/youtube.png"
            alt="logo"
            width={30}
            height={20}
            priority={true}
          />
        </button>
        {showPopup && (
          <div className="absolute bottom-[40px] left-[-60px] bg-gray-300 text-black px-5 py-0 rounded-md shadow-md z-[100] flex items-center gap-3">
            <Link
              href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              onClick={(e) => togglePopup(!showPopup)}
            >
              Conducting
            </Link>
            <div className="h-8 w-[1px] bg-gray-500"></div>
            <Link
              href="https://www.youtube.com/@MaximRysanov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              onClick={(e) => togglePopup(!showPopup)}
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
