import StatCard from "./components/dashboard/StatCard";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <ThemeToggle />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-4">
        <StatCard />
      </div>
    </>
  );
}
