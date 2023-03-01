import NavbarL from "../components/NavbarL";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://lh3.googleusercontent.com/a/AGNmyxZImRZ4bu5YQddHKmnOQCJB1Nm-JQmBAlJ5N1TG0Q=s96-c" alt=""/>
        </Link>
        <NavbarL />
        
      </div>
    </header>
  );
};

export default Header;