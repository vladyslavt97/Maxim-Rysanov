import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { FiCopy } from "react-icons/fi";
import CopyToClipboard from "react-copy-to-clipboard";
type Props = {};

export default function Contacts({}: Props) {
  return (
    <div className="w-full text-black rounded md:pt-5">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl pt-5">Contacts</h1>
      </div>
      <div className="p-4 flex justify-center items-center flex-col text-center">
        <div className="">
          <h1 className="font-semibold">General Management</h1>
          <p>
            <span className="italic">Lorna Neill</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-3">
              <AiOutlinePhone />
              +44 (0) 7798 531 819
              <br />
            </div>
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              lorna@musicinteralia.com
              <br />
              <CopyToClipboard text="lorna@musicinteralia.com">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <Link
              href="http://www.musicinteralia.com"
              className="text-blue-900"
            >
              musicinteralia.com
              <br />
            </Link>
          </p>
        </div>
        <br />
        <div>
          <h1 className="font-semibold">Benelux</h1>
          <p>
            <span className="italic">Marjon Koenekoop</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              marjon@ivyartists.com
              <br />
              <CopyToClipboard text="marjon@ivyartists.com">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <Link href="http://www.ivyartists.com" className="text-blue-900">
              ivyartists.com
              <br />
            </Link>
          </p>
        </div>
        <br />
        <div>
          <h1 className="font-semibold">Italy & various projects</h1>
          <p>
            <span className="italic">Susanna Stefani Caetani</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              susanna@onylstage.co.uk
              <br />
              <CopyToClipboard text="susanna@onylstage.co.uk">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <div className="flex flex-row text-center justify-center items-center gap-3">
              <AiOutlinePhone /> +44 7950 427967
              <br />
            </div>
            <Link
              href="http://www.onlystage.co.uk/rysanov/"
              className="text-blue-900"
            >
              onlystage.co.uk/rysanov
              <br />
            </Link>
            <Link
              href="http://www.onlystage.co.uk/rysanov-conductor/"
              className="text-blue-900"
            >
              onlystage.co.uk/rysanov-conductor
              <br />
            </Link>
          </p>
        </div>
        <br />
        <div>
          <h1 className="font-semibold">Scandinavia</h1>
          <p>
            Nordic Artists Management A/S
            <br />
            <span className="italic">Neel Teilmann </span>
            <span className="text-xs">(viola engagements)</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              net@nordicartistsmanagement.com
              <br />
              <CopyToClipboard text="net@nordicartistsmanagement.com">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <span className="italic">Jacob Soelberg </span>
            <span className="text-xs">(conducting engagements)</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              jrs@nordicartistsmanagement.com
              <br />
              <CopyToClipboard text="jrs@nordicartistsmanagement.com">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <div className="flex flex-row text-center justify-center items-center gap-3">
              <AiOutlinePhone />
              +45 22 744 904
              <br />
            </div>
            <Link
              href="http://www.nordicartistsmanagement.com"
              className="text-blue-900"
            >
              nordicartistsmanagement.com
              <br />
            </Link>
          </p>
        </div>
        <br />
        <div>
          <h1 className="font-semibold">The Netherlands</h1>
          <p>
            <span className="italic">Marjon</span>
            <br />
            IVY ARTISTS
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              marjon@ivyartists.com
              <br />
              <CopyToClipboard text="marjon@ivyartists.com">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <div className="flex flex-col text-center justify-center items-center gap-1">
              <div className="flex justify-center items-center gap-2">
                <AiOutlinePhone />
                +31 (0)70 39 25 271
              </div>
              <div className="flex justify-center items-center gap-2">
                <AiOutlinePhone />
                31 (0)6 28 48 98 53
              </div>
            </div>
            <Link href="www.ivyartists.com" className="text-blue-900">
              ivyartists.com
              <br />
            </Link>
          </p>
        </div>
        <br />
        <div>
          <h1 className="font-semibold">Spain</h1>
          <p>
            <span className="italic">Gonzalo Augusto</span>
            <br />
            Concertos Augusto S.L.
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              gonzalo@conciertosaugusto.com
              <br />
              <CopyToClipboard text="gonzalo@conciertosaugusto.com">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <div className="flex flex-row text-center justify-center items-center gap-3">
              <AiOutlinePhone />
              +34 91 634 02 05
              <br />
            </div>
            <Link
              href="http://www.conciertosaugusto.com/"
              className="text-blue-900"
            >
              conciertosaugusto.com
              <br />
            </Link>
          </p>
        </div>
        <br />
        <div>
          <h1 className="font-semibold">France and various projects</h1>
          <p>
            Productions Internationales Albert Sarfati
            <br />
            <span className="italic">Vony Sarfati</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              vsarfati@productions-sarfati.fr
              <br />
              <CopyToClipboard text="vsarfati@productions-sarfati.fr">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <span className="italic">Marina Bower</span>
            <br />
            <div className="flex flex-row text-center justify-center items-center gap-2">
              <FiMail />
              mbower@productions-sarfati.fr
              <br />
              <CopyToClipboard text="mbower@productions-sarfati.fr">
                <button>
                  <FiCopy className="ml-2 text-gray-400" />
                </button>
              </CopyToClipboard>
            </div>
            <div className="flex flex-row text-center justify-center items-center gap-3">
              <AiOutlinePhone />
              +33 (0)1 47 70 89 27
              <br />
            </div>
            <Link
              href="https://productions-sarfati.fr/artiste/maxim-rysanov/?lang=en"
              className="text-blue-900"
            >
              productions-sarfati.fr
              <br />
            </Link>
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
      <div>
        <h5 className="pb-16 text-center text-xs text-gray-500">
          The website is made by
          <Link
            href="https://www.facebook.com/vladyslav.tsurkanenko/"
            className="text-blue-900/80 italic"
          >
            {" "}
            Vladyslav Tsurkanenko
          </Link>
        </h5>
      </div>
    </div>
  );
}
