import "./defaultStyle.css";
import users from "./../assets/Users.svg";
import cube from "./../assets/box-cube-3D (1).svg";
import arrowUp from "./../assets/long-arrow-up.svg";
import arrowDown from "./../assets/long-arrow-down.svg";
import menu from "./../assets/Menu-2.svg";
import GaugeChart from "./GaugeChart";
import BarChart from "./BarChart";
const EcommerceTop = () => {
  return (
    <div className="flex xl:flex-row flex-col w-full gap-6">
      <div className="flex flex-col gap-6 xl:w-[56%]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-2xl border-[#E4E7EC] border-[1px] ">
            <div>
              <img className="p-3 rounded-xl bg-[#F2F4F7]" src={users} />
            </div>
            <div className="section-subTitle mt-[20px] mb-[14px]">
              Customers
            </div>
            <div className="flex items-end justify-between">
              <div className="font-bold text-[30px] text-black-1">3,782</div>
              <div className="pb-1">
                <div className="text-sm font-medium bg-[#ECFDF3] text-[#027A48] pl-2 py-[2px] pr-[10px] rounded-full w-auto h-auto">
                  <span>
                    <img src={arrowUp} />
                  </span>
                  <span>11.01%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border-[#E4E7EC] border-[1px]  ">
            <div>
              <img className="p-3 rounded-xl bg-[#F2F4F7]" src={cube} />
            </div>
            <div className="section-subTitle mt-[20px] mb-[14px]">Orders</div>
            <div className="flex items-end justify-between">
              <div className="font-bold text-[30px] text-black-1">5.359</div>
              <div className="pb-1">
                <div className="text-sm font-medium bg-[#FEF3F2] text-[#B42318] pl-2 py-[2px] pr-[10px] rounded-full w-auto h-auto">
                  <span>
                    <img src={arrowDown} />
                  </span>
                  <span>9.05%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border-[#E4E7EC] border-[1px] ">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="section-title mb-1">Monthly Sales</h2>
            </div>
            <div className="btn w-min h-min btn-ghost hover:bg-transparent p-0">
              <img className="max-w-6" src={menu} />
            </div>
          </div>
          <div className="barChart">
            <BarChart></BarChart>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl overflow-hidden border-[#E4E7EC] border-[1px]  xl:w-[44%] ">
        <div className=" bg-[#F2F4F7] w-full  h-full">
          <div className="w-full bg-white rounded-b-2xl p-6">
            <div className="flex items-start justify-between xl:mb-[36px]">
              <div>
                <h2 className="section-title mb-1">Monthly Target</h2>
                <p className="section-subTitle">
                  Target you{"'"}ve set for each month
                </p>
              </div>
              <div className="btn w-min h-min btn-ghost hover:bg-transparent p-0">
                <img className="max-w-6" src={menu} />
              </div>
            </div>
            <div>
              <GaugeChart></GaugeChart>
              <div className="xl:pb-[13px]  xl:pt-6">
                <p className="section-subTitle text-center">
                  You earn $3287 today, its higher than last month.
                  <br className="xl:block hidden" /> Keep up your good work!
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 px-6 flex justify-center">
            <div className="flex items-center gap-8">
              <div>
                <p className="section-subTitle text-center mb-1">Target</p>
                <div className="flex items-center gap-1">
                  <span className="section-title">$20K</span>
                  <span>
                    <img className="w-4" src={arrowDown} />
                  </span>
                </div>
              </div>
              <div className="h-[27.7px] border-[1px] border-[#E4E7EC] inline-block"></div>
              <div>
                <p className="section-subTitle text-center mb-1">Revenue</p>
                <div className="flex items-center gap-1">
                  <span className="section-title">$16K</span>
                  <span>
                    <img className="w-4" src={arrowUp} />
                  </span>
                </div>
              </div>
              <div className="h-[27.7px] border-[1px] border-[#E4E7EC] inline-block"></div>
              <div>
                <p className="section-subTitle text-center mb-1">Today</p>
                <div className="flex items-center gap-1">
                  <span className="section-title">$1.5K</span>
                  <span>
                    <img className="w-4" src={arrowUp} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceTop;
