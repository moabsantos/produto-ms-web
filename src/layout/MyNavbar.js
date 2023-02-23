import { Link } from "react-router-dom";
  
const MyNavbar = () => {
  return (
    <div>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/unidade-medida">Unidade Medida</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <Link to="/auth-usuario-login">Login</Link>
              </div>
            </li>
        </ul>
    </nav>
</div>
  );
};
  
export default MyNavbar;