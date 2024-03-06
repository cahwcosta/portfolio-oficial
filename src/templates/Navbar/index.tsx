import { FC } from "react";
import ResponsiveElement from "../../components/ResponsiveElement";
import NavbarDesktop from "./desktop";
import { NavbarProps } from "./props";
import NavbarMobile from "./mobile";

const Navbar: FC<NavbarProps> = ({ toggleTheme }) => {
  return (
    <ResponsiveElement
      mobile={<NavbarMobile toggleTheme={toggleTheme} />}
      content={<NavbarDesktop toggleTheme={toggleTheme} />}
    />
  );
};

export default Navbar;
