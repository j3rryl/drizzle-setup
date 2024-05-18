import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string | undefined | null;
    } & DefaultSession["user"];
  }
  interface User {
    role: string;
  }
}
