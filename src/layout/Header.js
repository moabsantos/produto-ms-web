import NavbarL from "../components/NavbarL";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        <NavbarL />
      </div>
    </header>
  );
};

export default Header;