import { connectDB } from "@/utill/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (req.method === "POST") {
    req.body = JSON.parse(req.body);
    let saveDb = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
      name: req.body.name,
    };
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("comment").insertOne(saveDb);
    return res.status(200).json(result);
  }
}
