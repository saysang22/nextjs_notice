//list/page.js
import { connectDB } from "@/utill/database";
import ListClient from "./ListClient";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListClient result={result} />
    </div>
  );
}
