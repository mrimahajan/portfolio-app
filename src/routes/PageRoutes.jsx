import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import MainLayout from "../components/layouts/MainLayout";

import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import ContactUs from "../pages/ContactUs";
import Error from "../pages/Error";
import Home from "../pages/Home";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.Home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={route.ABOUT} element={<About />} />
          <Route path={route.RESUME} element={<Resume />} />
          <Route path={route.PORTFOLIO} element={<Portfolio />} />
          <Route path={route.CONTACT_US} element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
