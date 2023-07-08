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

const PersonalArea = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          My Area
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Ads</MenuItem>
            <MenuItem>Favourite Boats </MenuItem>
            <MenuItem>Create Boats </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default PersonalArea;
