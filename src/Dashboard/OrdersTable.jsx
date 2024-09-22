import product1 from "./../assets/image 7.png";
import product2 from "./../assets/image 7 (1).png";
import product3 from "./../assets/image 7 (2).png";
import product4 from "./../assets/image 7 (3).png";
import product5 from "./../assets/image 7 (4).png";
import "./defaultStyle.css";

const OrdersTable = () => {
  return (
    <div className="overflow-x-auto xl:w-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th className="text-xs font-medium text-black-3">Products</th>
            <th className="text-xs font-medium text-black-3">Category</th>
            <th className="text-xs font-medium text-black-3">Price</th>
            <th className="text-xs font-medium text-black-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <div className="flex items-center gap-3 flex-col md:flex-row ">
                <div>
                  <img className="" src={product1} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-text-black-1">
                    Macbook pro 13{`"`}
                  </h2>
                  <p className="font-normal text-xs text-black-3">2 Variants</p>
                </div>
              </div>
            </th>
            <td className="section-subTitle">Laptop</td>
            <td className="section-subTitle">$2399.00</td>
            <td>
              <span className="text-sx font-medium text-[#027A48] bg-[#ECFDF3] py-[2px] px-2 rounded-full">
                Delivered
              </span>
            </td>
          </tr>
          <tr>
            <th>
              <div className="flex items-center gap-3  flex-col md:flex-row ">
                <div>
                  <img src={product2} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-text-black-1">
                    Apple Watch Ultra
                  </h2>
                  <p className="font-normal text-xs text-black-3">1 Variants</p>
                </div>
              </div>
            </th>
            <td className="section-subTitle">Watch</td>
            <td className="section-subTitle">$879.00</td>
            <td>
              <span className="text-sx font-medium text-[#B54708] bg-[#FFFAEB] py-[2px] px-2 rounded-full">
                Pending
              </span>
            </td>
          </tr>
          <tr>
            <th>
              <div className="flex items-center gap-3  flex-col md:flex-row ">
                <div>
                  <img src={product3} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-text-black-1">
                    Iphone 15 Pro Max
                  </h2>
                  <p className="font-normal text-xs text-black-3">2 Variants</p>
                </div>
              </div>
            </th>
            <td className="section-subTitle">Smart Phone </td>
            <td className="section-subTitle">$1869.00</td>
            <td>
              <span className="text-sx font-medium text-[#027A48] bg-[#ECFDF3] py-[2px] px-2 rounded-full">
                Delivered
              </span>
            </td>
          </tr>
          <tr>
            <th>
              <div className="flex items-center gap-3  flex-col md:flex-row ">
                <div>
                  <img src={product4} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-text-black-1">
                    Ipad Pro 3rd Gen
                  </h2>
                  <p className="font-normal text-xs text-black-3">2 Variants</p>
                </div>
              </div>
            </th>
            <td className="section-subTitle">Electronics</td>
            <td className="section-subTitle">$1699.00</td>
            <td>
              <span className="text-sx font-medium text-[#B54708] bg-[#FFFAEB] py-[2px] px-2 rounded-full">
                Canceled
              </span>
            </td>
          </tr>
          <tr>
            <th>
              <div className="flex items-center gap-3  flex-col md:flex-row ">
                <div>
                  <img src={product5} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-text-black-1">
                    Airpods Pro 2nd Gen
                  </h2>
                  <p className="font-normal text-xs text-black-3">1 Variants</p>
                </div>
              </div>
            </th>
            <td className="section-subTitle">Accessories</td>
            <td className="section-subTitle">$240.00</td>
            <td>
              <span className="text-sx font-medium text-[#027A48] bg-[#ECFDF3] py-[2px] px-2 rounded-full">
                Delivered
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
