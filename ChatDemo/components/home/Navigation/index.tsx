import NavBar from "./NavBar";
import React, { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [tab, setTab] = useState("全部");
const Fn = (tab: string) => {
  setTab(tab);
};
export default function Navigation() {
  return (
    <nav className="w-[260px] bg-gray-900 h-full text-gray-300 ">
      <NavBar tab={tab} Fn={Fn}></NavBar>
    </nav>
  );
}
