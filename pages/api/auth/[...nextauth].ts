import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { allUsers } from "../users";
import { compareHashPassword } from "../../../helpers";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials Exotic Car",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = allUsers();
        const userExist = users.find((user) => {
          return user.email === credentials?.email;
        });
        if (!userExist) {
          throw new Error("No user found");
        }

        const passwordNormal = credentials?.password;
        if (passwordNormal) {
          const passwordIsEqual = await compareHashPassword(
            passwordNormal,
            userExist.password
          );
          if (!passwordIsEqual) {
            throw new Error("Password not confere");
          }
        }

        return {
          email: userExist.email,
        };
      },
    }),
  ],
});
