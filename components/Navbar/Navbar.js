import Link from "next/link";
import { NavbarWrapper } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
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
