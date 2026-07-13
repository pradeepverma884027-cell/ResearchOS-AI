"use client";

import { Bell, Search, Plus, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewWorkspaceDialog from "../workspace/NewWorkspaceDialog";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-4 backdrop-blur-md">

      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-1 text-zinc-400">
          Here's what's happening with your research today.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2">

          <Search className="h-4 w-4 text-zinc-500" />

          <input
            type="text"
            placeholder="Search..."
            className="w-40 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />

        </div>

        {/* Notification */}
        <button className="rounded-xl border border-zinc-700 p-3 transition hover:border-blue-500 hover:bg-blue-600">

          <Bell className="h-5 w-5" />

        </button>

        {/* New Workspace */}
            <NewWorkspaceDialog />
        {/* User */}
        <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2">

          <UserCircle2 className="h-8 w-8 text-blue-400" />

          <div>

            <p className="text-sm font-semibold">
              Pradeep
            </p>

            <p className="text-xs text-zinc-400">
              Student Researcher
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}