//include fav boats, create boats and my ads
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react';
import { NavBtnLink } from '../components/NavbarElements';

const PersonalArea = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          My Area
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <NavBtnLink to="/profile/:id">My Profile</NavBtnLink>
            <NavBtnLink to="boats/ads">My Ads</NavBtnLink>
            <NavBtnLink to="/favboats">Favourite Boats</NavBtnLink>
            <NavBtnLink to="/newboat">Create Boats</NavBtnLink>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <NavBtnLink to="/faq">FAQ</NavBtnLink>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default PersonalArea;
