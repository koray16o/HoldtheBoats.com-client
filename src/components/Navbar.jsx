import PersonalArea from '../pages/PersonalArea';
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements';
import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
  const { logOutUser } = useContext(AuthContext);

  return (
    <>
      <div className="logo">
        <img
          src="/f4024b6077144fb39da68f2e844b5236 (1).png"
          alt="Logo"
          width={125}
        />
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-around'
          }}
        >
          <div
            className="greetingUser"
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          ></div>
          Hello User!
          <div>
            <button
              onClick={logOutUser}
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                backgroundColor: 'lightblue',
                color: 'red',
                borderColor: 'black'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/home" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/boats" activestyle="true">
            Boats
          </NavLink>
          <NavLink to="/faq" activestyle="true">
            F.A.Q.
          </NavLink>
          <PersonalArea />
          <NavBtnLink type="submit">Publish your Ad</NavBtnLink>
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
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'10'}
                variant={'link'}
                cursor={'pointer'}
                width={75}
                marginLeft={100}
              >
                <Avatar
                  width={50}
                  height={50}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
