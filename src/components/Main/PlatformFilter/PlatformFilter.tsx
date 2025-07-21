import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../../hooks/usePlatform";
import {Platform} from "../../../services/platform-service";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform?: Platform | null
}
function PlatformFilter({onSelectPlatform, selectedPlatform}: Props) {
  const {data} =  usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => ( <MenuItem key={platform.id} onClick={() => (onSelectPlatform(platform))}> {platform.name} </MenuItem>))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
