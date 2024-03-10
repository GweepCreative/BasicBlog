"use client";
import { BlogProps } from "@/components/BlogButton";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blog({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<BlogProps>();
  async function getBlog() {
    const res = await axios.post(`/api/post`, { slug: params.slug });
    setData(res.data.data);
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
            <Link href={"/"} className="font-bold underline hover:opacity-75 hover:no-underline">Go Home</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
