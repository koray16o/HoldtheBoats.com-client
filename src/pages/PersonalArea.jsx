//include fav boats, create boats and my ads
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react';
/* import { Navigate } from 'react-router-dom';
 */
const PersonalArea = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          My Area
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Profile</MenuItem>
            <MenuItem>
              {/* <Navigate to="/boats/ads"> */}My Ads
              {/*               </Navigate>
               */}{' '}
            </MenuItem>
            <MenuItem>
              {/* <Navigate to="/favboats"> */}Favourite Boats
              {/*               </Navigate>{' '}
               */}{' '}
            </MenuItem>
            <MenuItem>
              {/* <Navigate to="/new-boat"> */}Create Boats
              {/*  </Navigate>{' '} */}
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>
              {' '}
              {/*               <Navigate to="/faq" />
               */}{' '}
              FAQ
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default PersonalArea;
