import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../../hooks/usePlatform";

function PlatformFilter() {
  const {data} =  usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((platform) => ( <MenuItem key={platform.id}> {platform.name} </MenuItem>))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
