import Link from "next/link";
import { NavbarWrapper, NavLink } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link href="/">
        <NavLink>Karta</NavLink>
      </Link>
      <Link href="/about">
        <NavLink>Om oss</NavLink>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
