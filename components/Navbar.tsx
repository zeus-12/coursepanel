import Link from "next/link";
import { Button, Drawer } from "@mantine/core";
import { useState } from "react";
import { Burger } from "./NavbarComponents";

const navItems = [
  {
    name: "For Institutes",
    path: "/faculty",
  },
  {
    name: "For Students",
    path: "/",
  },
];

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav className="my-4 flex items-center justify-between px-8 text-2xl lg:px-32">
      <Link href="/" passHref>
        <p className="text-xl font-semibold tracking-tight lg:text-2xl">
          CoursePanel
        </p>
      </Link>

      <div className="hidden gap-8 lg:flex">
        <NavItemsComponent />
      </div>

      <Burger opened={opened} setOpened={setOpened} />

      <Drawer
        position="right"
        opened={opened}
        onClose={() => setOpened((o) => !o)}
        className="pt-4"
        classNames={{ closeButton: "text-blue-400 scale-150 mr-3" }}
      >
        <NavItemsComponent />
      </Drawer>
    </nav>
  );
};

const NavItemsComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      {navItems.map((item) => (
        <Link href={item.path} key={item.name}>
          <p className="rounded-md px-2 py-1 text-3xl font-semibold text-gray-700 hover:bg-gray-100 lg:text-xl">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default Navbar;
