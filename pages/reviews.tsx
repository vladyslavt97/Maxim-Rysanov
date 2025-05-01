import React from "react";
import Image from "next/image";
import reviews from "../reviews.json";
import { motion } from "framer-motion";

type Props = {};

export default function Reviews({}: Props) {
  return (
    <div className="py-10 bg-gray-100">
      <h1 className="text-center font-bold text-2xl text-gray-700 mb-5">
        Reviews
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center mx-5">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg border border-gray-300 shadow-lg p-5 bg-white w-full md:w-[350px] h-[350px] flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-gray-800 text-lg mb-2">
                {review.CDTitle}
              </h2>

              {review.note && (
                <p className="text-gray-600 text-sm mb-4">{review.note}</p>
              )}

              <blockquote
                className={`text-gray-700 italic mb-4 ${
                  review.textSize && review.textSize
                }`}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div className="text-sm text-gray-500 mb-2">
                {review.link ? (
                  <a
                    href={review.link}
                    className="italic underline text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {review.byWhom}
                  </a>
                ) : (
                  <span>{review.byWhom}</span>
                )}
              </div>

              <div className="text-sm text-gray-500">
                {review.publicationDate}
                {review.author && `, ${review.author}`}
              </div>
            </div>

            {/* Optional images */}
            <div className="mt-4 flex flex-row justify-between items-end">
              {review.byWhom && (
                <Image
                  src={`/${review.byWhom}.png`}
                  alt={review.byWhom}
                  width={50}
                  height={50}
                  className="rounded"
                />
              )}
              {review.label && (
                <Image
                  src={`/${review.label}.png`}
                  alt={review.label}
                  width={50}
                  height={50}
                  className="rounded"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
