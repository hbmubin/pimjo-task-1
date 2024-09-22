import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { SidebarContext } from "./SiderContext";

const Dashboard = () => {
  const { isSidebar, setIsSidebar } = useContext(SidebarContext);
  console.log(isSidebar);

  const handleClickOutside = () => {
    setIsSidebar(true);
  };

  return (
    <div className="flex overflow-y-hidden relative h-full">
      <div
        className={`sideBar h-full border-r-[#E4E7EC] border-r-[1px] lg:w-[17.36%] lg:min-w-[250px] w-[220px] border-b-[#E4E7EC] xl:rounded-br-none rounded-br-xl overflow-hidden border-b-[1px] xl:border-b-0  min-h-screen absolute md:static z-50 duration-300 ${
          isSidebar === true
            ? "-translate-x-96 md:-translate-x-0"
            : "-translate-x-0"
        }`}
      >
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1">
        <Header></Header>
        <div onClick={handleClickOutside} className="h-full w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
