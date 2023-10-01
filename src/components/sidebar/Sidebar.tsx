import { Tabs } from "antd";
import { dataSidebar } from "../../mock/data";
import { useState } from "react";
import { TabsPosition } from "antd/es/tabs";

const Sidebar = () => {
  const [tabPosition] = useState<TabsPosition>("left"); // Specify the type of tabPosition

  // Remove changeTabPosition function if not used

  return (
    <div className="h-screen bg-black">
      <Tabs
        className="flex items-center justify-between"
        tabPosition={tabPosition}
      >
        {dataSidebar.map((item, i) => {
          const id = String(i + 1);
          return (
            <Tabs.TabPane
              tab={<img src={item.Icons} alt={`Tab ${id}`} />}
              key={id}
            >
              Content for Tab {id}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Sidebar;
