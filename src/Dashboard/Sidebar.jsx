import logo from "./../assets/Logo Icon.svg";
import search from "./../assets/Search.svg";
import searchShortcut from "./../assets/Search Shortcut.svg";
import "./defaultStyle.css";
import Menu from "./Menu";
import Others from "./Others";
import Support from "./Support";

const Sidebar = () => {
  return (
    <div className={`flex flex-col h-full w-full py-8 px-5 bg-white`}>
      <div className="flex items-center gap-3 mb-7">
        <img className="w-8" src={logo} />
        <h2 className="font-semibold text-2xl">TailAdmin</h2>
      </div>
      <div className="xl:hidden block mb-4">
        <div className="flex gap-2 items-center border-[#E4E7EC] border-[1px] rounded-lg bg-[#F9FAFB] p-1">
          <div>
            <img className="w-4" src={search} />
          </div>
          <div className="flex-1">
            <input
              className="w-full focus:outline-none placeholder:text-xs placeholder:font-normal text-[#667085] bg-[#F9FAFB]"
              placeholder="Search or type command..."
              type="text"
            />
          </div>
          <div>
            <img className="w-7" src={searchShortcut} />
          </div>
        </div>
      </div>
      <Menu></Menu>
      <Support></Support>
      <Others></Others>
      <div className="flex-1 flex items-end">
        <div className="py-5 px-4 bg-[#F9FAFB] rounded-2xl">
          <div className="text-center">
            <h2 className="text-base font-semibold text-[#101828]">
              TailAdmin Pro
            </h2>
            <p className="section-subTitle mb-4 mt-2">
              Get all dashboard and 300+ essential UI elements
            </p>
            <button className="text-sm font-medium text-white bg-[#465FFF] rounded-lg px-4 py-[14px] w-full">
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
