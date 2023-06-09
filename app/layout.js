import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogOutBtn from "./LogoutBtn";
import { cookies } from "next/dist/client/components/headers";
import DarkMode from "./DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  let res = cookies().get("mode");
  console.log("쿠키", res.value);
  return (
    <html lang="en">
      <body
        className={res !== undefined && res.value === "dark" ? "dark-mode" : ""}
      >
        <nav className="navbar">
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/list"}>
              <li>글목록</li>
            </Link>
            <Link href={"/write"}>
              <li>글쓰기</li>
            </Link>
            <li>{!session ? <LoginBtn /> : <LogOutBtn />}</li>
            <li>{!session ? "" : session.user.name + "님 반갑습니다."}</li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
