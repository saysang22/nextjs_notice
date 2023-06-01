//edit/[id]/page.js
import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input name="_id" value={result._id} style={{ display: "none" }} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}