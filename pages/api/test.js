//@/pages/api/test.js
export default function handler(req, res) {
  console.log(req.query);
  // if (요청.method === "POST") {
  //   console.log("서버테스트ㅋㅋ", 요청.method, 요청.body);
  // }
  // if (요청.method === "DELETE") {
  //   console.log("삭제테스트", 요청.method);
  // }
  return res.status(200).json("처리완료");
}
