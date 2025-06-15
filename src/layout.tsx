import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function Dashboard() {
  return (
    <>
      <div className="h-screen max-h-screen flex bg-white text-neutral-900">
        <SideBar />
        <div className="flex flex-col w-full">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
