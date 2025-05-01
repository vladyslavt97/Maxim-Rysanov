import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  //bg-[#F2F2F2]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full rounded text-black flex overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="relative direction-rtl [direction:rtl] [&>*]:[direction:ltr] z-20 py-2 flex flex-col justify-start items-start text-gray-800 text-sm md:text-md md:text-2xl xl:text-3xl xl:font-normal lg:leading-relaxed w-1/2 md:w-1/3 overflow-y-auto h-full px-1 md:px-3"
      >
        <div className="italic px-5 pb-1 font-normal md:leading-loose">
          <p className="text-small">
            He conducted so fantastically that I realized we were dealing with
            an exceptionally great conductor, someone truly worthy of our
            admiration — and that’s remarkable considering he’s also one of the
            greatest living violists.
            <br />
          </p>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="text-gray-500 w-full px-5 pb-1 text-xs md:text-lg"
        >
          <span className="text-smaller">Bartok Radio Concert Review</span>
          <br />
          <span className="text-smaller">Kristóf Csengery</span>
        </motion.p>
        <br />

        <div className="italic px-5 py-1 font-normal md:leading-loose">
          <p className="text-small">
            It’s wonderful to find a recording like this; one that, as soon as
            it finishes, you want to start it all over again.
          </p>
        </div>
        <div className="flex justify-start w-full">
          <Link href="/recordings" className="relative inline-block mx-5">
            <Image
              src="/recordings/schumann.png"
              width={70}
              height={90}
              alt="schumann"
              className="shadow-2xl rounded-sm"
            />
          </Link>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="text-gray-500 w-full px-5 text-xs md:text-lg text-smaller"
        >
          <span className="text-smaller">
            BBC Music Magazine Chamber Choice
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 3 }}
          className="text-gray-500 w-full px-5 pb-5 text-[10px] md:text-lg text-smaller"
        >
          <span className="text-smaller">Christmas Issue, December 2024</span>
        </motion.p>
        <br />

        <div className="italic px-5 pb-1 font-normal md:leading-loose">
          <p className="text-small">
            The colours and contrasts that Rysanov manages to extract from the
            orchestra are truly fabulous!
            <br />
          </p>
        </div>
        <div className="flex justify-start w-full">
          <Link href="/recordings" className="relative inline-block mx-5">
            <Image
              src="/recordings/1_vasks.jpeg"
              width={70}
              height={90}
              alt="schumann"
              className="shadow-2xl rounded-sm"
            />
          </Link>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="text-gray-500 w-full px-5 pb-1 text-xs md:text-lg"
        >
          <span className="text-smaller">Crescendo Magazine</span>
        </motion.p>
        <br />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
        className="relative w-1/2 md:w-2/3 h-full"
      >
        <Image
          src="/homemr.png"
          alt="image"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
