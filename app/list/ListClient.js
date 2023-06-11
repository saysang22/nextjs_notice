//ListClient.js
"use client";
import Link from "next/link";

export default function ListClient({ result, session }) {
  const deleteHandler = (listId, e) => {
    fetch("/api/post/delete", {
      method: "POST",
      body: listId,
    })
      .then((a) => {
        return a.json();
      })
      .then((a) => {
        alert(a);
        let email = result.filter((email) => {
          return email._id === listId;
        });
        if (session && email[0].author === session.user.email) {
          e.target.closest(".list-item").style.opacity = 0;
          setTimeout(() => {
            e.target.closest(".list-item").style.display = "none";
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {result.map((list) => {
        return (
          <div className="list-item" key={list._id}>
            <div className="list-inner">
              <Link href={`/detail/${list._id}`}>
                <h4>{list.title}</h4>
              </Link>
              <div className="edit-wrap">
                <Link href={`/edit/${list._id}`}>수정</Link>
                <button
                  onClick={(e) => {
                    deleteHandler(list._id, e);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
            <p>{list.content}</p>
          </div>
        );
      })}
    </>
  );
}
