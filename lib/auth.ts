import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePasswords } from "@/app/utils/auth";
import { getUserByEmail } from "@/app/services/userService";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await getUserByEmail(credentials.email);
        if (!user) {
          return null;
        }

        const isPasswordValid = await comparePasswords(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }

        return { id: user._id.toString(), email: user.email};
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user = {
          ...session.user,
          id: token.id as string
        } as {
          name?: string | null | undefined;
          email?: string | null | undefined;
          image?: string | null | undefined;
          id: string;
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
};