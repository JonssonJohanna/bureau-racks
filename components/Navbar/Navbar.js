import Link from "next/link";
import { NavbarLinkWrapper, NavbarWrapper } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h1>Byrårackor</h1>
      <NavbarLinkWrapper>
        <Link href="/">
          <a>karta</a>
        </Link>
        <Link href="/about">
          <a>Om oss</a>
        </Link>
      </NavbarLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
