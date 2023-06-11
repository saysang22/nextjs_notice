//list/page.js
import { connectDB } from "@/utill/database";
import ListClient from "./ListClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const dynamic = "force-dynamic";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  let session = await getServerSession(authOptions);
  return (
    <div className="list-bg">
      <ListClient result={result} session={session} />
    </div>
  );
}
