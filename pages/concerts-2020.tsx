import PastConcerts from "@/components/PastConcerts";
import concerts2020 from "@/concerts2020.json";
import { sortedConcerts } from "@/date";
import { ConcertType } from "@/interfaces";

type Props = {};

export default function Concerts2022({}: Props) {
    const validConcerts2020 = sortedConcerts(concerts2020);
    return (
        <div className="relative text-black flex flex-col items-center overflow-y-auto h-full">
            <PastConcerts />
            <div className="absolute left-6 md:static md:flex md:justify-center md:items-center pt-5">
                <h1 className="font-bold text-xl">2020</h1>
            </div>
            <div className="flex flex-col mx-3 mt-16 justify-center items-start mb-40 lg:text-xl">
                {validConcerts2020.map(
                    (concert: ConcertType, index: number) => (
                        <div key={index} className="m-3">
                            <div className="flex flex-row">
                                <h2 className="font-semibold">
                                    {concert.date}
                                </h2>
                                &nbsp;
                                {concert.viola !== "" && (
                                    <h2>{concert.viola}</h2>
                                )}
                                &nbsp;
                                {concert.conductor !== "" && (
                                    <h2>{concert.conductor}</h2>
                                )}
                            </div>
                            <h5>
                                {concert.location}
                                <br />
                                {concert.programme.map((prog, ind) => (
                                    <div key={ind}>
                                        <p>♪ {prog}</p>
                                    </div>
                                ))}
                            </h5>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
