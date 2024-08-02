import logo from "./../assets/Logo Icon.svg";
import "./defaultStyle.css";
import Menu from "./Menu";
import Others from "./Others";
import Support from "./Support";
const Sidebar = () => {
  return (
    <div className="flex flex-col border-r-[#E4E7EC] border-r-[1px] w-[17.36%] min-w-[250px] min-h-screen py-8 px-5">
      <div className="flex items-center gap-3 mb-7">
        <img className="w-8" src={logo} />
        <h2 className="font-semibold text-2xl">TailAdmin</h2>
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
