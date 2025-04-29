import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Props = {};

export default function HomePage({}: Props) {
      
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-homebg bg-cover w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black sm:h-[93%] h-[83%] overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="z-10 absolute top-[3%] md:top-[12%] flex justify-start items-start h-[95%] md:h-[60vh] text-gray-800 flex-col text-sm md:text-md md:text-2xl xl:text-3xl xl:font-normal lg:leading-relaxed md:ml-[5%] lg:ml-[12%] overflow-y-scroll w-[50%]"
                >
                <div className="italic px-5 pb-1 font-normal md:leading-loose">
                    <p className="text-small">
                    He conducted so fantastically that I realized we were dealing with an exceptionally great conductor, someone truly worthy of our admiration — and that’s remarkable considering he’s also one of the greatest living violists.
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
                </motion.p>
                <br /> 

                <div className="italic px-5 py-1 font-normal md:leading-loose">
                    <p className="text-small">
                        It’s wonderful to find a recording like this; one
                        that, as soon as it finishes, you want to start it all
                        over again.
                    </p>
                </div>
                <Link href="/recordings" className="relative inline-block mx-5">
                    <Image
                        src="/recordings/schumann.png"
                        width={70}
                        height={90}
                        alt="schumann"
                        className="shadow-2xl rounded-sm"
                    />
                </Link>
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
                    <span className="text-smaller">
                        Christmas Issue, December 2024
                    </span>
                </motion.p>
                <br />

                <div className="italic px-5 pb-1 font-normal md:leading-loose">
                    <p className="text-small">
                        The colours and contrasts that Rysanov manages to
                        extract from the orchestra are truly fabulous!
                        <br />
                    </p>
                </div>
                <Link href="/recordings" className="relative inline-block mx-5">
                    <Image
                        src="/recordings/1_vasks.jpeg"
                        width={70}
                        height={90}
                        alt="schumann"
                        className="shadow-2xl rounded-sm"
                    />
                </Link>
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
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    delay: 0.7,
                }}
                id="home"
            >
                <Image
                    src="/homemr.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="absolute -right-2 object-fit w-[90%] top-0 max-h-full object-contain md:-right-52"
                    priority={true}
                />
            </motion.div>
        </motion.div>
    );
}
