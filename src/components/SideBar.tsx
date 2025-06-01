import {
  BellIcon,
  CarIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";
import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col w-64 bg-white dark:bg-neutral-800 text-black dark:text-white p-4 rounded-l-lg">
        <h1 className="text-xl font-semibold mb-4">Car Life Manager</h1>
        <div className="border-b border-neutral-700 mb-4"></div>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                `flex gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-900"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                } text-neutral-800 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200`
              }
            >
              <LayoutDashboardIcon />
              Tableau de bord
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vehicules"
              className={({ isActive }: { isActive: boolean }) =>
                `flex gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-900"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                } text-neutral-800 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200`
              }
            >
              <CarIcon />
              Mon véhicule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={({ isActive }: { isActive: boolean }) =>
                `flex gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-900"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                } text-neutral-800 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200`
              }
            >
              <BellIcon />
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }: { isActive: boolean }) =>
                `flex gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-neutral-100 dark:bg-neutral-900"
                    : "hover:bg-neutral-200 dark:hover:bg-neutral-900"
                } text-neutral-800 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-200`
              }
            >
              <SettingsIcon />
              Paramètres
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
