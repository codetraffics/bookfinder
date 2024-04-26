"use client";

import { useState } from "react";
import Image from "next/image";

import { BookProps } from "@/typing";
import CardDetails from "./CardDetails";

type BookCardProps = {
  book: BookProps;
};

export default function BookCard({ book }: BookCardProps) {
  const {
    bookTitle,
    bookImage,
    bookDescription,
    bookAuthor,
    bookPublisher,
    amazonBookUrl,
    bookIsbn,
    bookRank,
  } = book;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex lg:w-1/4 md:w-1/3 flex-col p-6 justify-center items-center text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl;
    "
    >
      <div className="space-y-5">
        <Image
          src={bookImage}
          alt={bookTitle}
          width={300}
          height={100}
          className="relative w-full object-contain"
        />
        <div className="w-full flex flex-col justify-between items-start gap-2">
          <div>
            <h2 className="text-[18px] leading-[26px] font-bold capitalize">
              {bookTitle}
            </h2>
            <h3>{bookAuthor}</h3>
          </div>

          <div className="flex group-hover:invisible w-full justify-between text-grey text-[14px] leading-[17px]">
            <p>{bookRank}</p>
            <button onClick={() => setIsOpen(true)}>View More</button>
          </div>
        </div>
      </div>

      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        book={book}
      />
    </div>
  );
}
