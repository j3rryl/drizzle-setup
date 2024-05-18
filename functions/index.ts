import { db } from "@/db";
import { users } from "@/schema";
import { eq } from "drizzle-orm";

export const getUsers = async () => {
  return await db.select().from(users);
};
export const updateUser = async (email: string, role: string) => {
  await db.update(users).set({ role: role }).where(eq(users.email, email));
};
