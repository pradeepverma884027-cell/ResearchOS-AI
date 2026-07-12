import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
workspaces: defineTable({
    title: v.string(),
    description: v.string(),
    ownerId: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
}),
});