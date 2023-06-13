//app/detail/[listDetail]/Comment.js
"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [view, setView] = useState([]);

  const fetchHandler = () => {
    fetch(`/api/comment/list?id=${props._id}`)
      .then((r) => r.json())
      .then((result) => {
        setView(result);
      });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const inputHandler = (e) => {
    setComment(e.target.value);
  };

  const buttonHandler = () => {
    fetch("/api/comment/new", {
      method: "POST",
      body: JSON.stringify({
        comment: comment,
        _id: props._id,
        name: props.name,
      }),
    }).then(() => {
      fetchHandler();
    });
  };
  return (
    <>
      <hr></hr>
      <div>
        {view.length > 0
          ? view.map((data, i) => {
              return (
                <div key={i} className="comment">
                  <p>{data.content}</p>
                  <p>{data.name} 님이 쓴 댓글</p>
                </div>
              );
            })
          : "로딩중"}
      </div>
      <input onChange={(e) => inputHandler(e)} />
      <button onClick={buttonHandler}>댓글전송</button>
    </>
  );
}
