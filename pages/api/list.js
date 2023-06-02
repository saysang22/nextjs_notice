import { connectDB } from "@/utill/database";

export default async function handler(요청, 응답) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  응답.status(200).json(result);
}
