"use client";

import { FolderKanban, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkspaceCardProps {
  title: string;
  description: string;
}

export default function WorkspaceCard({
  title,
  description,
}: WorkspaceCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">

      <div className="mb-5 flex items-center justify-between">

        <div className="rounded-2xl bg-blue-600/20 p-3">
          <FolderKanban className="h-7 w-7 text-blue-400" />
        </div>

        <span className="text-xs text-zinc-500">
          Updated today
        </span>

      </div>

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex gap-3">

        <Button className="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700">
          Open
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-xl border-zinc-700 hover:bg-red-600 hover:text-white"
        >
          <Trash2 className="h-4 w-4" />
        </Button>

      </div>

    </div>
  );
}