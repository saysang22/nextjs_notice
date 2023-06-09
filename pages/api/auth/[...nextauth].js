import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "0e93c4ed4d618d45c75b",
      clientSecret: "3c7054647a9c541c3d9748b6721f5e4403dbb32d",
    }),
  ],
  secret: "060clf",
};
export default NextAuth(authOptions);
