import BlogButton, { BlogProps } from "@/components/BlogButton";
import axios from "axios";

const exampleBlog: BlogProps = {
  id: "1",
  title: "Awesome Blog",
  content: "This is a blog about awesome stuff",
  publishedAt: new Date(),
  author: {
    name: "John Doe",
    avatar:
      "https://pbs.twimg.com/profile_images/1671511978303430658/0fcxWFub_400x400.jpg",
  },
};

export default function Home() {
  async function newBlog() {
    const res = await axios.post("/api/blog", {
      title: "Awesome Blog",
      content: "This is a blog about awesome stuff",
      publishedAt: new Date(),
      author: { name: "John Doe", avatar: "" },
    });
    console.log(res.data);
  }

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="w-full flex justify-evenly items-center">
        <div className="bg-zinc-300  flex flex-col justify-center items-center gap-6 p-12 rounded-md">
          <h2 className="text-4xl font-bold m-2">New Blog</h2>
          <div className="flex flex-col justify-center items-center gap-y-5">
            <input
              className="outline-none p-2 rounded-sm w-[25vw]"
              type="text"
              placeholder="Title"
            />
            <textarea
              className="outline-none p-2 rounded-sm w-[25vw] h-[25vh]"
              placeholder="Content"
            />
          </div>
          <button className="bg-black w-[12vw] px-4 py-2 rounded-md text-white flex justify-center items-center gap-x-2 hover:opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Post
          </button>
        </div>

        <div className="flex flex-col justify-center items-center h-[60vh] gap-y-4 ">
          <h1 className="text-4xl font-bold">Blogs</h1>
          <div className="flex flex-col gap-y-4 h-full overflow-y-scroll  p-4">
            <BlogButton Blog={exampleBlog} />
            <BlogButton Blog={exampleBlog} />
            <BlogButton Blog={exampleBlog} />
            <BlogButton Blog={exampleBlog} />
          </div>
        </div>
      </div>
    </div>
  );
}
