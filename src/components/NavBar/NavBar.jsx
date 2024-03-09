import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div id="nav"> 
            <h2 id="nav-title">Powered By You </h2>
            <div>
        <Link id="link" to="/home">
            Home 
            </Link>
          <Link id="link" to="/about">
          About 
            </Link>
            </div>
        </div>
    );
  }

export default NavBar;