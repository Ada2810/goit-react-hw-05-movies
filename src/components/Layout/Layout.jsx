import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/movies" className="nav-link">Movies</NavLink>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
