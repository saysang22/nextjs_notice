//new.js
import { connectDB } from "@/utill/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);
  if (session) {
    요청.body.author = session.user.email;
  }

  if (요청.method == "POST") {
    const client = await connectDB;

    //input이 빈값일 때 예외처리----------------
    if (요청.body.title === "") {
      return 응답.status(500).json("제목없음");
    }
    if (요청.body.content === "") {
      return 응답.status(500).json("내용없음");
    }
    //-----------------------------------------

    //input에 값이 있으면 DB에 저장하고 list페이지로 이동
    const db = client.db("forum");
    let result = await db.collection("post").insertOne(요청.body);

    return 응답.status(200).redirect(302, "/list");
  }
}
