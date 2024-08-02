import "./defaultStyle.css";
import map from "./../assets/Map content.svg";
import menu from "./../assets/Menu-2.svg";
import filter from "./../assets/Filter.svg";
import us from "./../assets/US.svg";
import fr from "./../assets/FR.svg";
import OrdersTable from "./OrdersTable";
const EcoBottom = () => {
  return (
    <div className="w-full flex gap-6 mt-6">
      <div className="w-[37.47%]  bg-white rounded-2xl p-6 overflow-hidden border-[#E4E7EC] border-[1px] min-w-[413px]">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="section-title mb-1">Customers Demographic</h2>
            <p className="section-subTitle">
              Number of customer based on country
            </p>
          </div>
          <div className="btn w-min h-min btn-ghost hover:bg-transparent p-0">
            <img className="max-w-6" src={menu} />
          </div>
        </div>
        <div className="bg-[#F9FAFB] rounded-2xl p-[25.5px] overflow-hidden border-[#E4E7EC] border-[1px]">
          <img src={map} />
        </div>
        <div className="mt-6">
          <div className="w-full flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div>
                <img className="w-8" src={us} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-black-1">USA</h2>
                <p className="section-subTitle">2,379 Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <progress
                  className="progress w-[100px] progress-primary bg-[#E4E7EC]"
                  value="79"
                  max="100"
                ></progress>
              </div>
              <div className="menuTitle">79%</div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img className="w-8" src={fr} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-black-1">France</h2>
                <p className="section-subTitle">589 Customers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <progress
                  className="progress w-[100px] progress-primary bg-[#E4E7EC]"
                  value="23"
                  max="100"
                ></progress>
              </div>
              <div className="menuTitle">23%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[62.53%] p-6 h-min  bg-white rounded-2xl overflow-hidden border-[#E4E7EC] border-[1px] min-w-[665px]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="section-title">Recent Orders</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex btn menuTitle btn-ghost items-center gap-2 px-4 py-[10px]  rounded-lg border-[#E4E7EC] border-[1px]">
              <span>
                <img className="w-5" src={filter} />
              </span>
              <span>Filter</span>
            </div>
            <div className="px-4  btn btn-ghost py-[10px] menuTitle rounded-lg border-[#E4E7EC] border-[1px]">
              See all
            </div>
          </div>
        </div>
        <div className="mt-4">
          <OrdersTable></OrdersTable>
        </div>
      </div>
    </div>
  );
};

export default EcoBottom;
