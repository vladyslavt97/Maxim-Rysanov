import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-evenly items-center border-t-[10px] border-r-[10px] border-l-[10px] border-gray-300 h-[51px]">
            {/* <SocialIcon
                url="https://www.facebook.com/maximrysanov"
                network="facebook"
                style={{ height: 35, width: 35 }}
                className="m-1 cursor-pointer"
            />
            <SocialIcon
                url="https://www.youtube.com/@MaximRysanov"
                network="youtube"
                style={{ height: 35, width: 35 }}
                className="m-1 cursor-pointer"
            />
            <SocialIcon
                url=""
                network="instagram"
                style={{ height: 35, width: 35 }}
                className="m-1 cursor-pointer"
            /> */}
            <Link href="https://www.instagram.com/mrysanov_viola_conductor">
                <Image
                    src="/social/instagram.png"
                    alt="logo"
                    width={30}
                    height={20}
                    priority={true}
                />
            </Link>
            <Link href="https://www.youtube.com/@MaximRysanov">
                <Image
                    src="/social/youtube.png"
                    alt="logo"
                    width={30}
                    height={20}
                    priority={true}
                />
            </Link>
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
