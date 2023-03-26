import React, { useEffect, useState } from "react";
import Body from "./body";
import Header from "./header";
import Multislider from "./multislider";
import Sidebar from "./sidebar";
import SliderComponent from "./slider";

function UserLayout({ isScrolled }) {
  const [sidebar, setsidebar] = useState(true);
  useEffect(() => {
    window.innerWidth < 769 ? setsidebar(false) : setsidebar(true);
  }, [window.innerWidth]);

  return (
    <>
      <Header
        isScrolled={isScrolled}
        setsidebar={setsidebar}
        sidebar={sidebar}
      />
      <div className="flex">
        <Sidebar />
        <Body sidebar={sidebar} />
      </div>
    </>
  );
}

export default UserLayout;
