import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

interface LayoutTypes {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
