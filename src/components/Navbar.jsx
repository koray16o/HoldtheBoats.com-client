import PersonalArea from '../pages/PersonalArea';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements';
import { AuthContext } from '../context/AuthContext';
import { useState, useContext } from 'react';
import { search } from '../api/boats.api';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logOutUser } = useContext(AuthContext);
  const [searchBoats, setSearchBoats] = useState('');
  const navigate = useNavigate();

  const handleSearch = async e => {
    e.preventDefault();
    const response = await search({ search: searchBoats });
    navigate('/search', { state: response.data.boats });
  };
  const handleChange = e => {
    console.log(e.target.value);
    setSearchBoats(e.target.value);
  };

  return (
    <>
      <div className="logo">
        <a href="/">
          <img
            src="/f4024b6077144fb39da68f2e844b5236 (1).png"
            alt="Logo"
            width={125}
          />
        </a>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            flexDirection: 'row-reverse',
            marginRight: '40px'
          }}
        ></div>
      </div>
      <Nav>
        <Bars />

        <NavMenu
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row'
          }}
        >
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/boats" activestyle="true">
            Boats
          </NavLink>
          <NavLink to="/faq" activestyle="true">
            F.A.Q.
          </NavLink>
          <PersonalArea />
          <NavBtnLink
            type="submit"
            to="/newboat"
            style={{
              backgroundColor: 'lightcoral',
              color: 'white',
              width: 323
            }}
          >
            Publish your Ad
          </NavBtnLink>
          <div
            className="container-fluid"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              marginLeft: '100px'
            }}
          >
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search boats..."
                aria-label="Search"
                value={searchBoats}
                onChange={handleChange}
                name="search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: 'white', backgroundColor: 'lightcoral' }}
              >
                Search
              </button>
            </form>

            <NavBtnLink
              onClick={logOutUser}
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                color: 'white',
                backgroundColor: 'lightskyblue'
              }}
            >
              Logout
            </NavBtnLink>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
