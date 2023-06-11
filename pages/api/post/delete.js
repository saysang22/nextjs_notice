//@/pages/api/delete.js
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    const db = (await connectDB).db("forum");
    let findUser = await db
      .collection("post")
      .findOne({ _id: new ObjectId(req.body) });

    if (!session) {
      return res.status(500).json("로그인해주세요");
    }
    if (findUser.author === session.user.email) {
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      return res.status(200).json("삭제완료");
    }
    if (findUser.author !== session.user.email) {
      return res.status(500).json("이 글의 작성자가 아닙니다.");
    }
  }
}
