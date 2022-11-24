import { Burger as MantineBurger } from "@mantine/core";
import React from "react";

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
