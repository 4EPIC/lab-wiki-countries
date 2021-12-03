import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            WikiCountries
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
