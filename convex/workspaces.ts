import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const createWorkspace = mutation({
  args: {
    title: v.string(),
    description: v.string(),
  },

  handler: async (ctx, args) => {
    const workspaceId = await ctx.db.insert("workspaces", {
      title: args.title,
      description: args.description,
      ownerId: "demo-user",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return workspaceId;
  },
});

export const getWorkspaces = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("workspaces").collect();
  },
});

export const deleteWorkspace = mutation({
  args: {
    id: v.id("workspaces"),
  },

  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});