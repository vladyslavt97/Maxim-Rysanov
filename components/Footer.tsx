import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-evenly items-center border-t-[10px] border-r-[10px] border-l-[10px] border-gray-300 h-[51px]">
      <Link href="https://www.instagram.com/mrysanov_viola_conductor/">
        <Image src="/insta.png" width={30} height={100} alt="insta" />
      </Link>
      <Link href="https://www.facebook.com/maximrysanov">
        <Image src="/facebook.png" width={30} height={100} alt="facebook" />
      </Link>
      <Link href="https://www.youtube.com/@MaximRysanov">
        <Image src="/youtube.png" width={30} height={100} alt="youtube" />
      </Link>
    </div>
  );
}
