import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard";
import Notification from "../pages/notifications";
import Settings from "../pages/settings";
import Vehicule from "../pages/vehicules";
import Layout from "../layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="vehicules" element={<Vehicule />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
