"use client";
import { BlogProps } from "@/components/BlogButton";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Blog({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<BlogProps>();
  const router = useRouter();
  async function getBlog() {
    const res = await axios.post(`/api/post`, { slug: params.slug });
    setData(res.data.data);
  }
  async function detelePost(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const res = await axios.delete(`/api/post`, {
      data: { slug: params.slug },
    });
    if(res.data.success) router.push("/");
  }
  useEffect(() => {
    getBlog();
  }, []);

  if (data) {
    return (
      <div className="h-screen flex  justify-center items-center">
        <div className="bg-zinc-200 flex flex-col gap-y-10 justify-evenly items-center w-[75vw] h-[75vh] rounded p-10">
          <h1 className="text-4xl font-bold">{data.title}</h1>

          <p className="text-center">{data.content}</p>
          <div className="flex flex-col justify-center items-center gap-y-10">
            <div className="flex items-center justify-center gap-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src={data.author.avatar}
              />
              <div>
                <p className="font-bold ">{data.author.name}</p>
                <p className="text-zinc-500">
                  {moment(data.publishedAt).format("D MMM YYYY ddd")}
                </p>
              </div>
            </div>
            <Link
              href={"/"}
              className="font-bold underline hover:opacity-75 hover:no-underline"
            >
              Go Home
            </Link>

            <button
              onClick={detelePost}
              className="flex justify-center items-center gap-x-2 bg-black text-white py-2 px-4 rounded hover:opacity-75"
            >
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              <p>Delete post</p>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
