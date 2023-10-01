import { Tabs } from "antd";
import { dataSidebar } from "../../mock/data";
import { useState } from "react";

const Sidebar = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(String(e.target.value));
  };
  return (
    <div className="h-screen bg-black">
      <Tabs
        className="flex items-center justify-between"
        tabPosition={tabPosition}
        items={dataSidebar.map((item, i) => {
          const id = String(i + 1);
          return {
            label: <img src={item.Icons} />,
            key: id,
          };
        })}
      >1</Tabs>
    </div>
  );
};

export default Sidebar;
