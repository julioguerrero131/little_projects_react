import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
