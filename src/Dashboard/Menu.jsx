import { Link, NavLink } from "react-router-dom";
import dashboard from "./../assets/Dashboard.svg";
import calendar from "./../assets/Calendar.svg";
import profile from "./../assets/User-1.svg";
import task from "./../assets/Copy.svg";
import forms from "./../assets/Copy-2.svg";
import table from "./../assets/table.svg";
import pages from "./../assets/page.svg";
import "./defaultStyle.css";
const Menu = () => {
  return (
    <div>
      <span className="uppercase font-normal text-xs text-[#98A2B3]">menu</span>
      <div className="flex flex-col gap-1 mt-4">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title mb-2 menuHeight  flex items-center   gap-3 px-3 py-2">
            <span>
              <img src={dashboard} />
            </span>
            <span className="menuTitle">Dashboard</span>
          </div>
          <div className="collapse-content p-0">
            <ul className="pl-[35px]">
              <li>
                <NavLink
                  className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1"
                  to="/"
                >
                  Ecommerce
                </NavLink>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Analytics
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Marketing
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  CRM
                </Link>
              </li>
              <li className="flex items-center justify-between menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                <Link className="">Stocks</Link>
                <span className="uppercase font-medium text-xs px-2 py-[2px] rounded-[30px] bg-[#465FFF] text-white">
                  new
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hover:bg-blue-50 rounded-xl duration-300s  flex items-center   gap-3 px-3 py-2">
          <span>
            <img src={calendar} />
          </span>
          <span className="menuTitle">Calendar</span>
        </div>
        <div className="hover:bg-blue-50 rounded-xl duration-300s  flex items-center   gap-3 px-3 py-2">
          <span>
            <img src={profile} />
          </span>
          <span className="menuTitle">Profile</span>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title mb-2 menuHeight  flex items-center   gap-3 px-3 py-2">
            <span>
              <img src={task} />
            </span>
            <span className="menuTitle">Task</span>
          </div>
          <div className="collapse-content p-0">
            <ul className="pl-[35px]">
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Analytics
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Marketing
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  CRM
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Stocks
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title mb-2 menuHeight  flex items-center   gap-3 px-3 py-2">
            <span>
              <img src={pages} />
            </span>
            <span className="menuTitle">Forms</span>
          </div>
          <div className="collapse-content p-0">
            <ul className="pl-[35px]">
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Analytics
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Marketing
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  CRM
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Stocks
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title mb-2 menuHeight  flex items-center   gap-3 px-3 py-2">
            <span>
              <img src={table} />
            </span>
            <span className="menuTitle">Tables</span>
          </div>
          <div className="collapse-content p-0">
            <ul className="pl-[35px]">
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Analytics
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Marketing
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  CRM
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Stocks
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title mb-2 menuHeight  flex items-center   gap-3 px-3 py-2">
            <span>
              <img src={forms} />
            </span>
            <span className="menuTitle">Pages</span>
          </div>
          <div className="collapse-content p-0">
            <ul className="pl-[35px]">
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1">
                  Ecommerce
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Analytics
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Marketing
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  CRM
                </Link>
              </li>
              <li>
                <Link className="menuTitle py-[10px] px-3 hover:bg-blue-50 rounded-xl duration-300 w-full mb-1 ">
                  Stocks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
