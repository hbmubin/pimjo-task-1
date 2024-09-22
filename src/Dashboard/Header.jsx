import menuBar from "./../assets/menu-fries-left.svg";
import search from "./../assets/Search.svg";
import searchShortcut from "./../assets/Search Shortcut.svg";
import moon from "./../assets/moon.svg";
import ring from "./../assets/Notification.svg";
import avatar from "./../assets/Avatar.png";
import arrowDown from "./../assets/Arrow-down.svg";
import { useContext, useState } from "react";
import "./defaultStyle.css";
import { SidebarContext } from "./SiderContext";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const sidebarInfo = useContext(SidebarContext);
  const { handleSidebar, isSidebar } = sidebarInfo;

  const avatarArrow = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="border-b-[#E4E7EC] border-b-[1px] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <div
            onClick={() => handleSidebar(!isSidebar)}
            className="  hover:bg-slate-50 bg-transparent p-2 border-[#E4E7EC] border-[1px] rounded-lg "
          >
            <img className="w-[20px] h-[20px] max-w-max" src={menuBar} />
          </div>
        </div>
        <div className="xl:block hidden">
          <div className="flex gap-3 items-center border-[#E4E7EC] border-[1px] rounded-lg bg-[#F9FAFB] p-2">
            <div>
              <img src={search} />
            </div>
            <div>
              <input
                className="w-[234px] focus:outline-none placeholder:text-sm placeholder:font-normal text-[#667085] bg-[#F9FAFB]"
                placeholder="Search or type command..."
                type="text"
              />
            </div>
            <div>
              <img src={searchShortcut} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="xl:p-3 p-[10px] cursor-pointer rounded-full border-[#E4E7EC] border-[1px] mr-3">
            <img src={moon} />
          </div>
        </div>
        <div>
          <div className="xl:p-3 p-[10px] cursor-pointer rounded-full border-[#E4E7EC] relative border-[1px] mr-4">
            <img src={ring} />
            <span className="absolute h-[10px] w-[10px] top-[1.6px] right-[1.6px] border-2 inline-block border-white rounded-full bg-[#FD853A]"></span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full">
            <img className="w-10 xl:w-auto" src={avatar} />
          </div>
          <div className="flex items-center gap-1">
            <h2 className="menuTitle cursor-pointer">Emirhan Boruch</h2>
            <details className="dropdown dropdown-end flex items-center">
              <summary
                onClick={avatarArrow}
                className="btn p-0 h-auto hover:bg-slate-50 bg-transparent border-none shadow-none"
              >
                <img
                  className={`${isClick && "rotate-180"} duration-300`}
                  src={arrowDown}
                />
              </summary>
              <ul className="menu dropdown-content mt-3 bg-base-100 rounded-box z-[1] border-[#E4E7EC] border-[1px] w-32  p-2">
                <li>
                  <a>LogOut</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
