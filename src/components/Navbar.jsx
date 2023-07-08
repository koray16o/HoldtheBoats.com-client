import { NavLink } from 'react-router-dom';
import PersonalArea from '../pages/PersonalArea';

const Navbar = () => {
  return (
    <nav className={`Navbar`}>
      <ul>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/boats"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          Boats
        </NavLink>
        <NavLink
          to="/user-area"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          <PersonalArea />
          Personal Area
        </NavLink>
        {/* Deconstruct this */}
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          F.A.Q
        </NavLink>
        <button type="submit">Publish your Ad</button>
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
