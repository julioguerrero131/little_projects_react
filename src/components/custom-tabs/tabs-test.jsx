import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Un poco de contenido random</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Este es el Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Este es el Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleOnChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleOnChange} />;
}
