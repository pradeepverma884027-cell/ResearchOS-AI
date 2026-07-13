"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  BrainCircuit,
  NotebookPen,
  CheckSquare,
  Settings,
  FlaskConical,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Workspaces",
    href: "/workspace",
    icon: FolderKanban,
  },
  {
    title: "Research Papers",
    href: "/papers",
    icon: FileText,
  },
  {
    title: "AI Assistant",
    href: "/ai",
    icon: BrainCircuit,
  },
  {
    title: "Notes",
    href: "/notes",
    icon: NotebookPen,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">

      {/* Logo */}
      <div className="border-b border-zinc-800 px-6 py-8">
        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-600 p-3">
            <FlaskConical className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              ResearchOS AI
            </h1>

            <p className="text-sm text-zinc-400">
              Research Command Center
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-6">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200
              ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="border-t border-zinc-800 p-5">

        <div className="rounded-2xl bg-zinc-900 p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
              P
            </div>

            <div>

              <h2 className="font-semibold">
                Pradeep Kumar
              </h2>

              <p className="text-sm text-zinc-400">
                Student Researcher
              </p>

            </div>

          </div>

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 py-2 transition hover:border-blue-500 hover:bg-blue-600">
            <Settings size={18} />
            Settings
          </button>

        </div>

      </div>

    </aside>
  );
}