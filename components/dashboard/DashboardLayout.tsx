import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-950 to-slate-950 text-white">

      <Sidebar />

      <section className="flex-1 p-10">

        <Topbar />

        <div className="mt-10">
          {children}
        </div>

      </section>

    </main>
  );
}