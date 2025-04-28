import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Props = {};

export default function HomePage({}: Props) {
    // Place this inside a useEffect if you're in React
    useEffect(() => {
        const container = document.querySelector(".your-scroll-container-class");
        if (!container) return;
      
        const scrollSpeed = 1; // pixels
        const interval = 40;   // ms between scroll steps
        const delayBeforeStart = 2000; // 2000ms = 2 seconds
      
        let timer: NodeJS.Timer;
      
        const startScrolling = () => {
          timer = setInterval(() => {
            if (container.scrollTop + container.clientHeight < container.scrollHeight) {
              container.scrollTop += scrollSpeed;
            }
          }, interval);
        };
      
        const delayTimer = setTimeout(startScrolling, delayBeforeStart);
      
        return () => {
          clearTimeout(delayTimer);
          clearInterval(timer);
        };
      }, []);
      
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
                className="your-scroll-container-class absolute top-[3%] md:top-[12%] flex justify-start items-start h-[97%] md:h-[60vh] text-gray-800 flex-col text-sm md:text-md md:text-2xl xl:text-3xl xl:font-normal lg:leading-relaxed md:ml-[5%] lg:ml-[12%] overflow-y-scroll w-[50%]"
            >
                <div className="italic px-5 pb-1 font-normal md:leading-loose">
                    <p className="text-small">
                        He conducted so fantastically that I realized we were dealing with an exceptionally great conductor, someone truly worthy of our admiration — and that’s remarkable considering he’s also one of the greatest living violists.<br /> So, a wonderful instrumental musician who also conducts magnificently.
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
                <div className="italic px-5 pb-1 font-normal md:leading-loose">
                    <p className="text-small">
                        Now, maybe I should also explain — not just praise — why Rysanov’s conducting is so outstanding.

                        What makes Rysanov such a brilliant conductor?
                        I think it’s the fusion of two elements in his work:
                        First, he possesses an exceptionally precise, exact, to-the-point, musician-supporting manual technique.
                        There are no wasted gestures, no decorative movements — everything is geared toward bringing the maximum out of the instruments and the ensemble.<br />

                        Secondly, alongside this extremely professional, perhaps even dry technical precision, there’s a wonderfully expressive, passionate, and compelling musicality.<br />
                        And crucially, these two elements do not cancel each other out.<br />

                        Often we see conductors who are technically excellent but emotionally cold, or those who are passionate but lack clarity and control.<br />
                        With Rysanov, neither flaw appears: instead, we see a fully-rounded, superb musical personality.<br />
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
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
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-gray-50/20 to-transparent" />

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
