"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import WorkspaceCard from "./WorkspaceCard";

export default function WorkspaceList() {
  const workspaces = useQuery(api.workspaces.getWorkspaces);

  if (workspaces === undefined) {
    return (
      <div className="mt-10 text-center text-zinc-400">
        Loading workspaces...
      </div>
    );
  }

  if (workspaces.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-zinc-700 p-8 text-center">
        <h2 className="text-xl font-semibold text-white">
          No Workspaces Yet
        </h2>

        <p className="mt-2 text-zinc-400">
          Create your first workspace to start collaborating on research.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        My Workspaces
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workspaces.map((workspace) => (
            <WorkspaceCard
  key={workspace._id}
  id={workspace._id}
  title={workspace.title}
  description={workspace.description}
/>
        ))}
      </div>
    </div>
  );
}