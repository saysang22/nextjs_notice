//app/DarkMode.js
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
  let router = useRouter();
  let cookieName = document.cookie.split("mode=").pop();

  const cookieHandler = () => {
    if (cookieName === "light") {
      document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
      router.refresh();
    } else {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      router.refresh();
    }
  };

  useEffect(() => {
    if (cookieName === "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
    }
  }, []);
  return (
    <>
      <button onClick={cookieHandler}>
        {cookieName === "light" ? "라이트모드" : "다크모드"}
      </button>
    </>
  );
}
