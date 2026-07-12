import WorkspaceForm from "@/components/workspace/WorkspaceForm";
import WorkspaceList from "@/components/workspace/WorkspaceList";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <section className="max-w-5xl mx-auto py-20 px-6">

        <h1 className="text-5xl font-bold">
          ResearchOS AI
        </h1>

        <p className="mt-3 mb-10 text-zinc-400">
          Research Smarter. Collaborate Faster.
        </p>

        <WorkspaceForm />
        <WorkspaceList />

      </section>

    </main>
  );
}