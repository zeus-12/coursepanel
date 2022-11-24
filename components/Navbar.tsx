import Link from "next/link";
import { Button, Drawer } from "@mantine/core";
import { useState } from "react";
import { Burger } from "./NavbarComponents";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <nav className="mt-4 flex items-center justify-between px-4 text-2xl">
      <p className="text-xl font-semibold tracking-tight">CoursePanel</p>
      <div className="hidden gap-8 lg:flex">
        <NavItemsComponent />
      </div>

      <Button className="hidden lg:flex" variant="outline">
        Get Started!
      </Button>
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
