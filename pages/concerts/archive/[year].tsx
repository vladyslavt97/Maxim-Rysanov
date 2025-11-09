import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import PastConcerts from "@/components/PastConcerts";
import { ConcertType } from "@/interfaces";
import {
  getArchiveConcerts,
  getArchiveYears,
} from "@/lib/pastConcerts";

type ArchivePageProps = {
  concerts: ConcertType[];
  year: string;
  archiveYears: string[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  const years = await getArchiveYears();
  const paths = years.map((year) => ({
    params: { year },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArchivePageProps> = async ({
  params,
}) => {
  const year = params?.year as string;

  const [archiveYears, concerts] = await Promise.all([
    getArchiveYears(),
    getArchiveConcerts(year),
  ]);

  return {
    props: {
      concerts,
      year,
      archiveYears,
    },
    revalidate: 60,
  };
};

export default function ArchiveConcertsPage({
  concerts,
  year,
  archiveYears,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="relative text-black flex flex-col items-center overflow-y-auto h-full">
      <PastConcerts
        archiveYears={archiveYears}
        upcomingHref="/concerts"
        upcomingLabel="Concerts"
      />
      <div className="absolute left-6 md:static md:flex md:justify-center md:items-center pt-5">
        <h1 className="font-bold text-xl text-gray-800">{year}</h1>
      </div>
      <div className="flex flex-col mt-16 md:mt-5 mx-3 justify-center items-start mb-40 lg:text-xl">
        {concerts.map((concert: ConcertType, index: number) => (
          <div key={`${concert.date}-${index}`} className="m-3">
            <div className="flex flex-row">
              <h2 className="font-semibold">{concert.date}</h2>
              <div className="flex flex-row">
                &nbsp;
                {concert.viola && <h2>{concert.viola}</h2>}
                &nbsp;
                {concert.viola && concert.conductor && "&"}
                &nbsp;
                {concert.conductor && <h2>{concert.conductor}</h2>}
              </div>
            </div>
            <h5>
              {concert.location}
              <br />
              {concert.programme?.map((prog, ind) => (
                <div key={`${prog}-${ind}`}>
                  <p>♪ {prog}</p>
                </div>
              ))}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
