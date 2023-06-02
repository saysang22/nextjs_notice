//@/pages/api/post/deit.js
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    let upDateData = {
      title: 요청.body.title,
      content: 요청.body.content,
    };
    const db = (await connectDB).db("forum");
    const result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: upDateData });

    응답.status(200).redirect(302, "/list");
  }
}
