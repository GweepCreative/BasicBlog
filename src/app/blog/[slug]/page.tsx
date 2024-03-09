import React from "react";

export default function Blog() {
  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="bg-zinc-200 flex flex-col gap-y-10 justify-evenly items-center w-[75vw] h-[75vh] rounded p-10">
        <h1 className="text-4xl font-bold">Blog Title</h1>

        <p className="text-center">
          Blog ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog Content Blog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog ContentBlog ContentBlog
          ContentBlog ContentBlog ContentBlog Content
        </p>
        <div>
          <div className="flex items-center justify-center gap-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://pbs.twimg.com/profile_images/1671511978303430658/0fcxWFub_400x400.jpg"
            />
            <div>
              <p className="font-bold ">John Doe</p>
              <p className="text-zinc-500">12 May 2021 Wed 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
