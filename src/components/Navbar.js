import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ bgColor }) {
  return (
    <div>
      <nav className="navmenu" style={{ backgroundColor: bgColor }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/use-effect">Use Effect</Link>
          </li>
          <li>
            <Link to="/use-callback">Use Callback</Link>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
