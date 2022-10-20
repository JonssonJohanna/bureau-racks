import Link from "next/link";
import { NavbarWrapper } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <h1>Byrårackor</h1>
      <Link href="/">
        <a>karta</a>
      </Link>
      <Link href="/about">
        <a>Om oss</a>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
