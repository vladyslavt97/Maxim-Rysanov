import reviews from "../reveiws.json"
type Props = {}

export default function Reviews({}: Props) {
  return (
    <div className=" text-yellow-600">
        <h1 className="mt-24 text-center text-lg text-black font-bold m-5">Reviews</h1>

        <div className="flex flex-col gap-5 items-stretch mx-5 w-100">
            {reviews.map((review, i)=>(
                <div key={i} className="rounded-lg border-2 border-gray-500/10 shadow-lg px-2 py-1">
                    <h1>{review.CDTitle}</h1>
                    <h2>&ldquo;{review?.quote}&ldquo;</h2>
                    <span className="text-gray-800">{review.link ? <a href={review.link}>{review.byWhom}</a> : <h2>{review.byWhom}</h2>}</span>
                    <h2 className="text-gray-600">{review?.publicationDate}{review?.author && ", " + review?.author}</h2>
                    <h2 className="text-black font-serif w-full flex justify-end">{review.label}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}