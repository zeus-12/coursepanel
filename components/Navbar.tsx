import { Burger as MantineBurger } from "@mantine/core";
import Link from "next/link";
import { Button, Drawer } from "@mantine/core";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { paddingStyles } from "../utils/constants";

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

interface NavbarProps {
  backgroundColour: string;
}

const Navbar: React.FC<NavbarProps> = ({ backgroundColour }) => {
  const [opened, setOpened] = useState(false);

  const closeDrawer = () => setOpened(false);

  const router = useRouter();
  const { route } = router;

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between py-3 text-2xl ${paddingStyles} sm:px-4 md:px-8`}
      style={{
        backdropFilter: "saturate(180%) blur(20px)",
        background: backgroundColour,
      }}
    >
      <Logo route={route} />

      <div className="hidden gap-8 lg:flex">
        <NavItemsComponent route={route} closeDrawer={() => {}} />
      </div>

      <Burger opened={opened} setOpened={setOpened} />

      <Drawer
        position="right"
        opened={opened}
        onClose={closeDrawer}
        className="pt-4"
        classNames={{ closeButton: "text-blue-400 scale-150 mr-3" }}
      >
        <NavItemsComponent route={route} closeDrawer={closeDrawer} />
      </Drawer>
    </nav>
  );
};

interface NavItemsComponentProps {
  closeDrawer: () => void;
  route: string;
}

const NavItemsComponent: React.FC<NavItemsComponentProps> = ({
  closeDrawer,
  route,
}) => {
  // const isCourseplan = route === "/plan";
  const isCoursemap = route === "/map";
  const isHome = route === "/";

  let twClasses: string, currentPageColor: string, contackButtonColor: string;
  if (isHome) {
    twClasses =
      "text-gray-800 hover:underline underline-offset-2 hover:text-gray-900";
    contackButtonColor = "dark";
  } else if (isCoursemap) {
    twClasses = "text-white hover:text-blue-400";
    currentPageColor = "text-blue-400 ";
    contackButtonColor = "blue";
  } else {
    twClasses = "text-gray-600 hover:bg-gray-100 hover:text-black";
    currentPageColor = "text-black";
    contackButtonColor = "dark";
  }

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      {navItems.map((item) => (
        <Link onClick={closeDrawer} href={item.path} key={item.name}>
          <p
            className={`${twClasses} rounded-md px-2 py-[0.33rem] text-2xl font-semibold lg:text-lg ${
              route.startsWith(item.path) ? currentPageColor : ""
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}

      <Link href="/contact">
        <Button
          onClick={closeDrawer}
          variant="outline"
          color={contackButtonColor}
        >
          Contact Us
        </Button>
      </Link>
    </div>
  );
};

interface LogoProps {
  route: string;
}

const Logo: React.FC<LogoProps> = ({ route }) => {
  const isCoursemap = route === "/map";

  return (
    <Link href="/" passHref>
      <div className="flex items-center">
        <Image src="/logo-icon.png" width={40} height={40} alt="logo" />
        <p
          className={`mt-2 text-xl font-semibold tracking-tight ${
            isCoursemap ? "text-white" : ""
          }`}
        >
          CoursePanel
        </p>
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
