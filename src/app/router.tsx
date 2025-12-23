import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/mainlayout";
import { NoFooterLayout } from "@/layouts/nofooterlayout";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/notfound";
import { Maintenance } from "@/pages/maintenance";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<NoFooterLayout />}>
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
