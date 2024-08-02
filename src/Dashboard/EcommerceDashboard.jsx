import "./defaultStyle.css";
import EcoBottom from "./EcoBottom";
import EcoMiddle from "./EcoMiddle";
import EcommerceTop from "./EcommerceTop";
const EcommerceDashboard = () => {
  return (
    <div className="bg-[#f9fafb] p-6 h-full">
      <EcommerceTop></EcommerceTop>
      <EcoMiddle></EcoMiddle>
      <EcoBottom></EcoBottom>
    </div>
  );
};

export default EcommerceDashboard;
