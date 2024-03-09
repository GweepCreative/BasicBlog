import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type BlogProps = {
  title: string;
  _id:string;
  content: string;
  publishedAt: Date;
  author: {
    name: string;
    avatar: string;
  };
};

export default function BlogButton({ Blog }: { Blog: BlogProps }) {
  return (
    <Link
      href={`/blog/${Blog._id}`}
      className="flex flex-col justify-center items-start w-[25vw] bg-zinc-50 hover:bg-zinc-200 transition-colors rounded p-4"
    >
      <h3 className="font-bold text-xl">{Blog.title}</h3>
      <p className="text-gray-500">{Blog.content}</p>

      <div className="flex justify-between items-center mt-4 w-full">
        <div className="flex justify-center items-center gap-x-2 ">
          <Image
            src={Blog.author.avatar}
            alt="blog"
            width={200}
            height={200}
            className="rounded-full w-12 h-12"
          />
          <div>
            <p>{Blog.author.name}</p>
            <p className="text-zinc-500">
              {moment(Blog.publishedAt).format("DD MMM YYYY ddd HH:mm")}
            </p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>
    </Link>
  );
}
