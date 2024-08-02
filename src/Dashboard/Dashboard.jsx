import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex overflow-y-hidden">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
