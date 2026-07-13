"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewWorkspaceDialog from "@/components/workspace/NewWorkspaceDialog";

export default function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 text-white">

      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">

        <div className="mb-4 flex items-center gap-2 text-blue-100">
          <Sparkles className="h-5 w-5" />
          ResearchOS AI
        </div>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight">
          Research Smarter.
          <br />
          Collaborate Faster.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-blue-100">
          Manage research papers, collaborate with your team,
          generate AI summaries, and organize everything
          from one workspace.
        </p>

        <div className="mt-8 flex gap-4">

          <NewWorkspaceDialog />

          <Button
            variant="secondary"
            className="rounded-xl"
          >
            Learn More

            <ArrowRight className="ml-2 h-4 w-4" />

          </Button>

        </div>

      </div>

    </section>
  );
}