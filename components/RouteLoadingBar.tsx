import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function RouteLoadingBar() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const start = () => {
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
                hideTimeoutRef.current = null;
            }
            setVisible(true);
            setProgress(15);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            intervalRef.current = setInterval(() => {
                setProgress((prev) => (prev < 90 ? prev + 6 : prev));
            }, 200);
        };

        const done = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setProgress(100);
            hideTimeoutRef.current = setTimeout(() => {
                setVisible(false);
                setProgress(0);
            }, 300);
        };

        router.events.on("routeChangeStart", start);
        router.events.on("routeChangeComplete", done);
        router.events.on("routeChangeError", done);

        return () => {
            router.events.off("routeChangeStart", start);
            router.events.off("routeChangeComplete", done);
            router.events.off("routeChangeError", done);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, [router.events]);

    return (
        <div className="pointer-events-none fixed left-0 top-0 z-[70] h-[2px] md:h-[3px] w-full">
            <div
                className="h-full bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 transition-[width,opacity] duration-200 ease-out"
                style={{
                    width: `${progress}%`,
                    opacity: visible ? 1 : 0,
                }}
            />
        </div>
    );
}
