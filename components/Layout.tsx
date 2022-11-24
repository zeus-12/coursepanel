import React from "react";
import Navbar from "./Navbar";

interface LayoutTypes {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" ">{children}</div>
    </div>
  );
};
export default Layout;
