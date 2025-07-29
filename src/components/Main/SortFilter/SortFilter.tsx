import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../../../store/storeGameQuery";

function SortFilter() {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-released" },
    { label: "Popularity", value: "-metacritic" }, // - means descending
    { label: "Average Rating", value: "-rating" },
  ];

  const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore(s => s.setSelectedSetOrder);

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
            onClick={() => setSelectedSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortFilter;
