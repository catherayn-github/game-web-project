import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../../hooks/usePlatform";
import { Platform } from "../../../services/platform-service";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder?: string;
}
function SortFilter({ onSelectSortOrder, selectedSortOrder }: Props) {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-released" },
    { label: "Popularity", value: "-metacritic" }, // - means descending
    { label: "Average Rating", value: "-rating" },
  ];

  const currentSortOrder = sortOrders.find((sortOrder) => sortOrder.value === selectedSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => onSelectSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortFilter;
