//list/page.js
import { connectDB } from "@/utill/database";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((list) => {
        return (
          <div className="list-item" key={list._id}>
            <div className="list-inner">
              <Link href={`/detail/${list._id}`}>
                <h4>{list.title}</h4>
              </Link>
              <Link href={`/edit/${list._id}`}>수정</Link>
            </div>
            <p>{list.content}</p>
          </div>
        );
      })}
    </div>
  );
}
