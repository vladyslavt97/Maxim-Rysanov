import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

type Props = {};

export default function Gallery({}: Props) {
    const images = ["/gallery/mr1.jpg", "/gallery/mr2.jpg", "/gallery/mr3.jpg","/gallery/mr4.jpg", "/gallery/mr5.jpg", "/gallery/mr6.jpg","/gallery/mr7.jpg", "/gallery/mr8.jpg"];
    const [count, setCount] = useState(0);
    const [openPreview, setOpenPreview] = useState("");

    const countUp = () => {
        console.log(count, images.length - 1);

        if (count < images.length - 1) {
            setCount(count + 1);
        } else {
            console.log("stop");
        }
    };
    const countDown = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            console.log("stop, too low");
        }
    };
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col gap-3 py-5 ">
                <div className="md:mx-[100px] flex flex-row justify-center items-center">
                    <div className="hover:scale-125" onClick={countDown}>
                        <FaChevronLeft size={30} color="white" />
                    </div>
                    <Image
                        src={images[count]}
                        alt="images"
                        width={300}
                        height={300}
                        loading="eager"
                        className=" object-cover h-[350px] w-[350px] object-top rounded shadow-black shadow-lg"
                        onClick={(e) => setOpenPreview(images[count])}
                    />
                    <div className="hover:scale-125" onClick={countUp}>
                        <FaChevronRight size={30} color="white" />
                    </div>
                    {openPreview !== "" && (
                        <div>
                            <div
                                className="absolute top-0 left-0 bg-black/70 w-screen h-screen"
                                onClick={(e) => setOpenPreview("")}
                            />
                            <div className="">
                                <Image
                                    src={images[count]}
                                    alt="images"
                                    width={500}
                                    height={500}
                                    loading="eager"
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-3"
                                    onClick={(e) =>
                                        setOpenPreview(images[count])
                                    }
                                />
                                <div
                                    className="absolute right-0 top-0"
                                    onClick={(e) => setOpenPreview("")}
                                >
                                    <IoCloseOutline color="gray" size={50} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-row gap-2 justify-center">
                    {images.map((l, i) => (
                        <div
                            className={`w-2 h-2 ${
                                count === i ? "bg-zinc-600" : "bg-zinc-200"
                            } rounded-full`}
                            key={i}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
