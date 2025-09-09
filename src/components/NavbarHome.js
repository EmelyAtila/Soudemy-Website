import { Link } from 'react-router-dom';
import './NavbarHome.css';

import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';



function NavbarHome() {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <div className="logo">
          <img src="/favicon.ico" alt="Soudemy Icon" className="logo-icon" />
          <span>Soudemy</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="nav-rigth">
        <SearchIcon className="icon" />
        <CartIcon className="icon" />
        <MenuIcon className="icon" />

      </div>
    </nav>
  );
}

export default NavbarHome;
