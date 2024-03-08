import PastConcerts from "@/components/PastConcerts";
import concerts2023 from "@/concerts2023.json";
import { sortingConcerts } from "@/date";
import { ConcertType } from "@/interfaces";

type Props = {};

export default function Concerts2023({}: Props) {
    const validConcerts2023 = sortingConcerts(concerts2023);
    return (
        <div className="bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black min-h-full flex flex-col items-center">
            <PastConcerts />
            <div className="absolute left-6 md:static md:flex md:justify-center md:items-center pt-5">
                <h1 className="font-bold text-xl">2023</h1>
            </div>
            <div className="flex flex-col mx-3 justify-center items-start mb-40 lg:text-xl">
                {validConcerts2023.map(
                    (concert: ConcertType, index: number) => (
                        <div key={index} className="m-3">
                            <div className="flex flex-row">
                                <h2 className=" font-semibold">
                                    {concert.date}
                                </h2>
                                <div className="flex flex-row">
                                    &nbsp;
                                    {concert.viola && <h2>Viola</h2>}
                                    &nbsp;
                                    {concert.viola && concert.conductor && "&"}
                                    &nbsp;
                                    {concert.conductor && <h2>Conductor</h2>}
                                </div>
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
