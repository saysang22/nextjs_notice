import { connectDB } from "@/utill/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.listDetail) });
  let session = await getServerSession(authOptions);
  console.log("ddddddddd", session);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <div>
        <Comment _id={result._id} name={session.user.name} />
      </div>
    </div>
  );
}
