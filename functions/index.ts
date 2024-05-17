import { db } from "@/db";
import { users } from "@/schema";

export const allUsers = await db.select().from(users);
