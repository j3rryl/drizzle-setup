import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import { db } from "./db";
import nodemailer from "next-auth/providers/nodemailer";
import { accounts, sessions, users, verificationTokens } from "./schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    google,
    nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.role = user.role;
      return session;
    },
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
});
