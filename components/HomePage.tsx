import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
                className="absolute top-[10%] flex justify-center items-start h-[60vh] text-gray-800 flex-col text-sm md:text-md md:text-2xl xl:text-3xl xl:font-light lg:leading-relaxed md:ml-[5%] lg:ml-[12%]"
            >
                <div className="italic w-[50%] sm:w-[50%] px-5 pb-1 font-extralight md:leading-loose">
                    {/* <div className="md:block hidden">
                        <TextGenerateEffect words={words} />
                    </div> */}
                    <p>
                        &quot;The colours and contrasts that Rysanov manages to
                        extract from the orchestra are truly fabulous!&quot;
                        <br />
                    </p>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    className="text-gray-500 w-full px-10 pb-1 text-xs md:text-lg"
                >
                    Crescendo Magazine
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 3 }}
                    className="text-gray-500 w-full px-10 pb-5 text-xs md:text-lg"
                >
                    Olivier Vrins, 18 May 2020
                </motion.p>
                <br />
                <Link href="/recordings" className="relative inline-block mx-5">
                    <div className="absolute -top-4 -left-3 bg-blue-400 -skew-x-12 transform text-white px-1 rounded text-xs">
                        New Release
                    </div>
                    <Image
                        src="/recordings/schumann.png"
                        width={90}
                        height={90}
                        alt="schumann"
                        className="shadow-2xl rounded-sm"
                    />
                </Link>

                <div className="italic w-[50%] sm:w-[50%] px-5 py-1 font-extralight md:leading-loose">
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="md:block hidden"
                    >
                        <TextGenerateEffect words={words2} />
                    </motion.div> */}
                    <p>
                        &quot;It’s wonderful to find a recording like this; one
                        that, as soon as it finishes, you want to start it all
                        over again.&quot;
                    </p>
                </div>

                <motion.p
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    className="text-gray-500 w-full px-10 pb-1 text-xs md:text-lg"
                >
                    BBC Music Magazine Chamber Choice
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 3 }}
                    className="text-gray-500 w-full px-10 pb-5 text-xs md:text-lg"
                >
                    Christmas Issue, December 2024
                </motion.p>
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
                    className="absolute -right-2 object-fit w-[90%] top-0 max-h-full object-contain lg:-right-52"
                    priority={true}
                />
            </motion.div>
        </motion.div>
    );
}
