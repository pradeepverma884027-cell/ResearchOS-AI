import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentWorkspaces from "@/components/dashboard/RecentWorkspaces";
import ActivityFeed from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <DashboardHero />

      <div className="mt-8">
        <DashboardStats />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RecentWorkspaces />
        </div>

        <ActivityFeed />

      </div>

    </DashboardLayout>
  );
}