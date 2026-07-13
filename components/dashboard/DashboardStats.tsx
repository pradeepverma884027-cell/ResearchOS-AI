"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  FolderKanban,
  FileText,
  BrainCircuit,
  CheckSquare,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function DashboardStats() {
  const workspaces = useQuery(api.workspaces.getWorkspaces);

  // Loading State
  if (workspaces === undefined) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-44 animate-pulse rounded-3xl bg-zinc-900"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Workspaces"
        value={workspaces.length}
        icon={FolderKanban}
        color="bg-blue-600"
      />

      <StatsCard
        title="Research Papers"
        value={0}
        icon={FileText}
        color="bg-green-600"
      />

      <StatsCard
        title="AI Chats"
        value={0}
        icon={BrainCircuit}
        color="bg-violet-600"
      />

      <StatsCard
        title="Tasks"
        value={0}
        icon={CheckSquare}
        color="bg-orange-600"
      />

    </div>
  );
}