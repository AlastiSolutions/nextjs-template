import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

//
// Example User Model
//
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: varchar("phone", { length: 256 }),
});
