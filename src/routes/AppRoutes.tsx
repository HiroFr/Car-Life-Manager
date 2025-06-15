import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard";
import PageVehicule from "../pages/vehicule";
import Layout from "../layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="vehicule/:id" element={<PageVehicule />} />
      </Route>
    </Routes>
  );
}
