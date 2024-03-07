import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div> <ul>
        <Link to="/home">
            Home 
            </Link>
          <Link to="/about">
            About 
            </Link>
        </ul>
        </div>
    );
  }

export default NavBar;