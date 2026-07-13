"use client";

import {
  FolderPlus,
  FileText,
  BrainCircuit,
  NotebookPen,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    icon: FolderPlus,
    title: "Workspace Created",
    description: "AI Research Workspace",
  },
  {
    icon: FileText,
    title: "Research Paper Uploaded",
    description: "Transformers.pdf",
  },
  {
    icon: BrainCircuit,
    title: "AI Summary Generated",
    description: "Generated in 12 seconds",
  },
  {
    icon: NotebookPen,
    title: "Notes Added",
    description: "5 new notes",
  },
  {
    icon: CheckCircle2,
    title: "Task Completed",
    description: "Literature Review",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-start gap-4"
            >

              <div className="rounded-xl bg-blue-600/20 p-3">
                <Icon className="h-5 w-5 text-blue-400" />
              </div>

              <div>

                <h3 className="font-medium">
                  {activity.title}
                </h3>

                <p className="text-sm text-zinc-400">
                  {activity.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}