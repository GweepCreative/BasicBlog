import mongoose from "mongoose";

export interface IBlog extends mongoose.Document {
  title: string;
  content: string;
  publishedAt: Date;
  author: {
    name: string;
    avatar: string;
  };
}

const BlogSchema = new mongoose.Schema<IBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  author: {
    name: { type: String, required: true },
    avatar: { type: String, required: true },
  },
});

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
