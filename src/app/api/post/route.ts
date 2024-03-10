import Blog from "@/utils/Models/Blog";
import dbConnect from "@/utils/mongoClient";


export async function POST(request: Request) {
  const { slug } = await request.json();
  // console.log(slug)
  // return new Response(JSON.stringify({ data: "hello" }));
  if (!slug) return new Response(JSON.stringify({ data: [] }));

  await dbConnect();
  const res = await Blog.findOne({ _id: slug });
  return new Response(JSON.stringify({ data: res }));
}
