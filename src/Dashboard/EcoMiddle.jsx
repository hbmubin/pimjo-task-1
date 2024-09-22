import "./defaultStyle.css";
import cal from "./../assets/Calendar (1).svg";
import AreaChart from "./AreaChart";

const EcoMiddle = () => {
  return (
    <div className="bg-white rounded-2xl p-6 overflow-hidden border-[#E4E7EC] border-[1px] mt-6 w-full xl:w-auto">
      <div className="flex sm:items-center sm:flex-row flex-col justify-between sm:mb-6">
        <div>
          <h2 className="section-title">Statistics</h2>
          <p className="section-subTitle">Target you’ve set for each month</p>
        </div>
        <div className="flex gap-3 flex-col-reverse sm:flex-row sm:items-center">
          <div className="bg-[#F2F4F7] rounded-lg sm:w-auto sm:block flex w-min ">
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
          <div className="flex gap-2 w-44 sm:w-auto  text-nowrap py-[10px] px-4 border-[1px] border-[#D0D5DD] calShadow rounded-md sm:mt-0 mt-2">
            <div>
              <img src={cal} />
            </div>
            <span className="menuTitle">05 Feb - 06 March</span>
          </div>
        </div>
      </div>
      <div className="xl:h-auto mt-6 xl:mt-0">
        <AreaChart></AreaChart>
      </div>
    </div>
  );
};

export default EcoMiddle;
