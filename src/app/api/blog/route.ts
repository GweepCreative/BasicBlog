import Blog from "@/utils/Models/Blog";
import dbConnect from "@/utils/mongoClient";

export async function POST(request: Request) {
  const body = await request.json();
  await dbConnect();
  const res = await Blog.create(body);
  return new Response(JSON.stringify({ success: true }));
}

export async function GET() {
  await dbConnect();
  const res = await Blog.find({});
  return new Response(JSON.stringify({ data: res }));
}
