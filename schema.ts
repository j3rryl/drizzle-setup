import { sql } from "drizzle-orm";
import {
  decimal,
  int,
  mysqlTable,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const user = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  passwords: text("passwords"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const detail = mysqlTable("details", {
  id: int("id").primaryKey().autoincrement(),
  name: decimal("purchase", { scale: 2, precision: 10 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").default(sql`CURRENT_TIMESTAMP`),
});
