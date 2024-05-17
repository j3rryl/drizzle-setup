import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string | undefined | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth" {
  interface AdapterUser {
    role?: string;
  }
}
declare module "next-auth" {
  interface User {
    role?: string;
  }
}
