import Image from "next/image";
import shopItems from "../shop.json";
import Link from "next/link";
type Props = {};

export default function Shop({}: Props) {
    return (
        <div className="my-24 h-screen">
            <h1 className="text-center font-bold text-2xl text-gray-500">
                Online Shop
            </h1>
            {shopItems.map((i) => (
                <div
                    key={i.image}
                    className="w-[300px] h-[300px] bg-white rounded-2xl p-2 shadow-lg mx-auto mt-10 hover:scale-105 transition-transform duration-2000"
                >
                    <Image
                        src={i.image}
                        alt={i.image}
                        width={300}
                        height={300}
                        className="rounded-lg"
                    />
                    <div className="flex items-start flex-col justify-around h-[100px]">
                        <h1 className="text-blue-500 font-bold italic">
                            {i.title}
                        </h1>
                        <h2 className="text-green-700 font-bold">
                            Price: {i.price} $
                        </h2>
                        <Link
                            href={i.buttonLink}
                            className="bg-gradient-to-tr from-green-300 to-green-500 px-2 rounded-md hover:bg-green-200 hover:text-white hover:scale-105 transition-transform duration-2000"
                        >
                            Purchase here
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
