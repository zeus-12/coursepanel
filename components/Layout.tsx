import React from "react";
import { Footer } from "./Footer";

interface LayoutTypes {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
