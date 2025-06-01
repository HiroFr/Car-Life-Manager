import {
  CheckupCard,
  HistoryCard,
  NotificationCard,
  StatCard,
} from "../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap gap-4 m-4">
        <StatCard />
        <NotificationCard />
        <HistoryCard />
        <CheckupCard />
      </div>
    </>
  );
}
