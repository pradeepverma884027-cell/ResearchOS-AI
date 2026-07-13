"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import WorkspaceCard from "@/components/workspace/WorkspaceCard";

export default function RecentWorkspaces() {
  const workspaces = useQuery(api.workspaces.getWorkspaces);

  if (workspaces === undefined) {
    return (
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Workspaces
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-64 animate-pulse rounded-3xl bg-zinc-900"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="mt-12">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Recent Workspaces
        </h2>

        <span className="text-sm text-zinc-400">
          {workspaces.length} Total
        </span>

      </div>

      {workspaces.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-700 p-12 text-center">
          <h3 className="text-xl font-semibold text-white">
            No workspaces yet
          </h3>

          <p className="mt-2 text-zinc-400">
            Click "New Workspace" to create your first research workspace.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace._id}
              title={workspace.title}
              description={workspace.description}
            />
          ))}
        </div>
      )}

    </section>
  );
}