import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/logo.png";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

type Props = {};

export default function Header({}: Props) {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (st: boolean) => {
    setShowPopup(st);
  };
  return (
    <header className="p-1 pr-5 flex flex-row justify-between bg-gradient-to-r from-gray-700 to-gray-900 items-center z-50 shadow-2xl h-full overflow-hidden">
      {logo && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="cursor-pointer"
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              priority={true}
            />
          </Link>
        </motion.div>
      )}
      {/* Links */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-gray-500/10"
          onClick={() => togglePopup(false)}
        ></div>
      )}
      <motion.div
        key={menu ? "open" : "close"}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        animate={{ opacity: 1 }}
        className={
          menu
            ? "absolute right-[7%] top-[60px] flex flex-col z-30 items-end md:hidden md:text-xl text-gray-200 overflow-y-auto h-[80%] pr-5"
            : "space-x-3 hidden md:flex font-semibold text-xl text-gray-300"
        }
      >
        <Link
          href="/"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Home</button>
        </Link>
        <Link
          href="bio"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Biography</button>
        </Link>
        <Link
          href="concerts"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Concerts</button>
        </Link>

        <div className="relative">
          <button
            onClick={() => togglePopup(!showPopup)}
            className={`${menu ? "py-5" : "xl:px-5"} ${
              showPopup && menu && "pb-1"
            } hover:text-gray-400 w-full text-right`}
          >
            <div className="flex justify-end items-center gap-1">
              Media
              {menu &&
                (showPopup ? (
                  <GoTriangleUp className="text-xs" />
                ) : (
                  <GoTriangleDown className="text-xs" />
                ))}
            </div>
          </button>

          {/* Desktop Popup */}
          {!menu && showPopup && (
            <div className="absolute top-10 left-[-60px] bg-gray-300 text-black px-5 py-0 rounded-md shadow-md z-[100] flex flex-col items-center">
              <Link
                href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline py-1"
                onClick={() => togglePopup(false)}
              >
                Conducting
              </Link>
              <div className="h-[1px] w-[100px] bg-gray-500"></div>
              <Link
                href="https://www.youtube.com/@MaximRysanov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline py-1"
                onClick={() => togglePopup(false)}
              >
                Channel
              </Link>
            </div>
          )}

          {/* Mobile Expanded Submenu */}
          {menu && showPopup && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-end w-full text-gray-300 overflow-hidden"
            >
              <Link
                href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline py-1 text-sm"
                onClick={() => togglePopup(false)}
              >
                Conducting
              </Link>
              <Link
                href="https://www.youtube.com/@MaximRysanov"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline py-1 text-sm"
                onClick={() => togglePopup(false)}
              >
                Channel
              </Link>
            </motion.div>
          )}
        </div>
        <Link
          href="reviews"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Reviews</button>
        </Link>
        {/* <Link
            href="shop"
            onClick={(e) => setMenu(false)}
            className="hover:text-gray-400"
        >
            <button className={menu ? "py-5" : "xl:px-5"}>Shop</button>
        </Link> */}
        <Link
          href="gallery"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Gallery</button>
        </Link>
        <Link
          href="recordings"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Recordings</button>
        </Link>
        <Link
          href="contacts"
          onClick={() => setMenu(false)}
          className="hover:text-gray-400"
        >
          <button className={menu ? "py-5" : "xl:px-5"}>Contacts</button>
        </Link>
      </motion.div>

      {/* Sidebar with AnimatePresence */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "55%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed bg-gradient-to-r from-gray-700 to-gray-900 h-screen right-[0px] top-0 md:hidden drop-shadow-2xl w-[100%]"
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Burger icon */}
      {menu && (
        <div
          className="absolute top-0 left-0 w-full h-full -z-10"
          onClick={() => toggleMenu()}
        ></div>
      )}
      <div onClick={toggleMenu} className="z-10 md:hidden">
        <motion.div
          animate={{ rotate: menu ? -45 : 0 }}
          className={
            menu
              ? "h-[2px] w-[40px] bg-gray-900 m-2"
              : "h-[2px] w-[40px] bg-gray-300 m-2"
          }
        ></motion.div>
        <motion.div
          animate={{ opacity: menu ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          className={
            menu
              ? "h-[2px] w-[40px] bg-gray-900 m-2"
              : "h-[2px] w-[40px] bg-gray-300 m-2"
          }
        ></motion.div>
        <motion.div
          animate={{ rotate: menu ? 45 : 0, y: menu ? -19.5 : 0 }}
          className={
            menu
              ? "h-[2px] w-[40px] bg-gray-900 m-2"
              : "h-[2px] w-[40px] bg-gray-300 m-2"
          }
        ></motion.div>
      </div>
    </header>
  );
}
