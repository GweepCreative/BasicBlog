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

export async function DELETE(request: Request) {
  const { slug } = await request.json();
  // console.log(slug)
  // return new Response(JSON.stringify({ data: "hello" }));
  if (!slug) return new Response(JSON.stringify({ data: [] }));

  await dbConnect();
  const res = await Blog.findOne({ _id: slug });
  if (res) {
    await Blog.deleteOne({ _id: slug });
    return new Response(JSON.stringify({ success: true }));
  } else return new Response(JSON.stringify({ data: "Not Found" }));
}
