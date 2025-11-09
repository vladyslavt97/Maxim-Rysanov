import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type PastConcertsProps = {
  archiveYears: string[];
  upcomingLabel?: string;
  upcomingHref?: string;
};

export default function PastConcerts({
  archiveYears,
  upcomingLabel = "",
  upcomingHref = "/concerts",
}: PastConcertsProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const archiveLinks = useMemo(
    () =>
      archiveYears.map((year, index) => {
        const href = `/concerts/archive/${year}`;
        return {
          href,
          label: `Concerts ${year}`,
          delay: 0.3 + index * 0.15,
        };
      }),
    [archiveYears]
  );

  const isCurrentPath = (href: string) => {
    if (!router) return false;
    if (router.pathname.includes("[year]")) {
      return router.asPath === href;
    }
    return router.pathname === href;
  };

  return (
    <div className="rounded--lg absolute right-2">
      <button
        className="py-2 pl-3 pr-1 bg-slate-600 hover:bg-slate-500 m-1
                active:bg-slate-400
                rounded-lg flex flex-row text-center justify-center items-center
                 text-white text-sm drop-shadow-lg"
        onClick={() => setOpen(!open)}
      >
        Past concerts
        <MdKeyboardArrowDown className="ml-1 text-white" />
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0.7 }}
          animate={{ height: 190, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col bg-white text-black rounded-lg drop-shadow-md"
        >
          {upcomingLabel && !isCurrentPath(upcomingHref) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center"
            >
              <Link href={upcomingHref}>
                <button onClick={() => setOpen(false)}>{upcomingLabel}</button>
              </Link>
            </motion.div>
          )}
          {archiveLinks.map(({ href, label, delay }, idx) => {
            if (isCurrentPath(href)) {
              return null;
            }
            const isLastVisible =
              idx === archiveLinks.length - 1 ||
              archiveLinks.slice(idx + 1).every((link) => isCurrentPath(link.href));
            return (
              <motion.div
                key={href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay }}
                className={`hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center ${
                  isLastVisible ? "rounded-b-lg" : ""
                }`}
              >
                <Link href={href}>
                  <button onClick={() => setOpen(false)}>{label}</button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
