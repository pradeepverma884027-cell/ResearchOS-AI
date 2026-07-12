"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function WorkspaceList() {
  const workspaces = useQuery(api.workspaces.getWorkspaces);

  if (workspaces === undefined) {
    return <p>Loading...</p>;
  }

  if (workspaces.length === 0) {
    return <p>No workspaces yet.</p>;
  }

  return (
    <div className="mt-10 space-y-4">
      {workspaces.map((workspace) => (
        <div
          key={workspace._id}
          className="rounded-lg border border-zinc-800 bg-zinc-900 p-5"
        >
          <h2 className="text-xl font-semibold">
            {workspace.title}
          </h2>

          <p className="mt-2 text-zinc-400">
            {workspace.description}
          </p>
        </div>
      ))}
    </div>
  );
}