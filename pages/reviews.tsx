import Image from "next/image";
import reviews from "../reveiws.json";
import Link from "next/link";
type Props = {};

export default function Reviews({}: Props) {
  return (
    <div className=" text-yellow-700 mb-24">
      <h1 className="mt-24 text-center text-lg text-black font-bold m-5">
        Reviews
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-5 items-stretch mx-5 w-100">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="relative rounded-lg border-2 border-gray-500/10 shadow-lg px-2 py-1 bg-white md:w-[350px] md:h-[270px] md:m-auto"
          >
            <h1>{review.CDTitle}</h1>
            {review?.note && (
              <h2 className="leading-8 text-gray-800 text-sm">
                {review?.note}
              </h2>
            )}
            <h2 className="leading-8">&ldquo;{review?.quote}&ldquo;</h2>
            <span className="text-gray-800">
              {review.link ? (
                <Link
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {review.byWhom}
                </Link>
              ) : (
                <h2>{review.byWhom}</h2>
              )}
            </span>
            <h2 className="text-gray-600 text-xs">
              {review?.publicationDate}
              {review?.author && ", " + review?.author}
            </h2>

            {/* magazine */}
            {review.byWhom && (
              <div className="absolute right-0 bottom-0">
                <Image
                  src={`/${review.byWhom}.png`}
                  alt={review.byWhom}
                  width={80}
                  height={80}
                  className="rounded-sm"
                />
              </div>
            )}

            {/* label */}
            {/* {review.label && (
                            <div className="flex justify-end">
                                <Image
                                    src={`/${review.label}.png`}
                                    alt={review.label}
                                    width={60}
                                    height={100}
                                    className="rounded-sm"
                                />
                            </div>
                        )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
