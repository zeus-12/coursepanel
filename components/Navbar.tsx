import { Burger as MantineBurger } from "@mantine/core";
import Link from "next/link";
import { Button, Drawer } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const navItems = [
  {
    name: "For Students",
    path: "/map",
  },
  {
    name: "For Institutes",
    path: "/plan",
  },
];

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const closeDrawer = () => setOpened(false);

  return (
    <nav className="flex items-center  justify-between py-3 px-8 text-2xl lg:px-24 xl:px-32">
      <Logo />

      <div className="hidden gap-8 lg:flex">
        <NavItemsComponent closeDrawer={() => {}} />
      </div>

      <Burger opened={opened} setOpened={setOpened} />

      <Drawer
        position="right"
        opened={opened}
        onClose={closeDrawer}
        className="pt-4"
        classNames={{ closeButton: "text-blue-400 scale-150 mr-3" }}
      >
        <NavItemsComponent closeDrawer={closeDrawer} />
      </Drawer>
    </nav>
  );
};

interface NavItemsComponentProps {
  closeDrawer: () => void;
}

const NavItemsComponent: React.FC<NavItemsComponentProps> = ({
  closeDrawer,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      {navItems.map((item) => (
        <Link onClick={closeDrawer} href={item.path} key={item.name}>
          <p
            className={`rounded-md px-2 py-[0.33rem] text-2xl font-semibold text-gray-700 hover:bg-gray-100 lg:text-lg ${
              router.route.startsWith(item.path) ? "text-cyan-500 " : ""
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}

      <Link href="/contact">
        <Button onClick={closeDrawer} variant="outline" color={"dark"}>
          Contact Us
        </Button>
      </Link>
    </div>
  );
};

const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center">
        <Image src="/logo-icon.png" width={40} height={40} alt="logo" />
        <p className="mt-2 text-xl font-semibold tracking-tight">CoursePanel</p>
      </div>
    </Link>
  );
};

interface BurgerTypes {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger: React.FC<BurgerTypes> = ({ opened, setOpened }) => {
  return (
    <MantineBurger
      className="lg:hidden"
      opened={opened}
      onClick={() => setOpened((o: boolean) => !o)}
      title={opened ? "Close navigation" : "Open navigation"}
    />
  );
};

export default Navbar;
