import "./defaultStyle.css";
import cal from "./../assets/Calendar (1).svg";
import AreaChart from "./AreaChart";

const EcoMiddle = () => {
  return (
    <div className="bg-white rounded-2xl p-6 overflow-hidden border-[#E4E7EC] border-[1px] mt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="section-title">Statistics</h2>
          <p className="section-subTitle">Target you’ve set for each month</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-[#F2F4F7] rounded-lg">
            <button className="font-medium text-sm text-[#101828] bg-white py-[10px] px-3 m-[2px] rounded-md">
              Overview
            </button>
            <button className="font-medium text-sm text-[#667085] py-[10px] px-4 m-[2px] rounded-md">
              Sales
            </button>
            <button className="font-medium text-sm text-[#667085] py-[10px] px-4 m-[2px] rounded-md">
              Revenue
            </button>
          </div>
          <div className="flex gap-2 py-[10px] px-4 border-[1px] border-[#D0D5DD] calShadow rounded-md">
            <div>
              <img src={cal} />
            </div>
            <span className="menuTitle">05 Feb - 06 March</span>
          </div>
        </div>
      </div>
      <div>
        <AreaChart></AreaChart>
      </div>
    </div>
  );
};

export default EcoMiddle;
