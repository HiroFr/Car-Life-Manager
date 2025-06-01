import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import ThemeToggle from "./components/ThemeToggle";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen flex bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 p-2">
        <SideBar />
        <div className="flex flex-col w-full">
          <NavBar />
          <Outlet />
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}
