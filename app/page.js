import { connectDB } from "@/utill/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  return <div>Hi</div>;
}
