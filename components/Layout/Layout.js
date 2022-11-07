import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
