import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://saysang2212:xfFd2k6qiUvoD8vW@cluster0.dnf1sql.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
