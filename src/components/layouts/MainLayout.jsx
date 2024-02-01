import { Outlet } from "react-router";
import AppHeader from "../AppHeader/AppHeader";

const MainLayout = () => {
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default MainLayout;
