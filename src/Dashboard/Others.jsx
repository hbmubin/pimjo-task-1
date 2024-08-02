import { Link, NavLink } from "react-router-dom";
import chartIcon from "./../assets/Chart.svg";
import cube from "./../assets/box-cube-3D.svg";
import plug from "./../assets/plug.svg";
import "./defaultStyle.css";
const Others = () => {
  return (
    <div className="mt-6">
      <span className="uppercase font-normal text-xs text-[#98A2B3]">
        Others
      </span>
      <div className="flex flex-col gap-1 mt-4">
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title mb-2 menuHeight  flex items-center   gap-3 px-3 py-2">
            <span>
              <img src={chartIcon} />
            </span>
            <span className="menuTitle">Charts</span>
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
              <img src={cube} />
            </span>
            <span className="menuTitle">UI Elements</span>
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
              <img src={plug} />
            </span>
            <span className="menuTitle">Authentication</span>
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

export default Others;
