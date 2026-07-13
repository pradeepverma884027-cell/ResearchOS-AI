import WorkspaceList from "@/components/workspace/WorkspaceList";

export default function RecentWorkspaces() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Workspaces
      </h2>

      <WorkspaceList />
    </section>
  );
}