import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

const SidebarProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);

  const handleSidebar = (event) => {
    setIsSidebar(event);
  };
  const sidebarInfo = {
    handleSidebar,
    isSidebar,
    setIsSidebar,
  };
  return (
    <SidebarContext.Provider value={sidebarInfo}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
