import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "",
    database: "test1234",
  },
  out: "./drizzle",
  //   verbose: true,
  strict: true,
});
