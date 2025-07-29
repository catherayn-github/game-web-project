import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store/storeGameQuery";

// interface Props {
//     onSearch: (searchText: string) => void;
// }
function SearchBar() {
  //simple form use ref hook
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore(s => s.setSearchText);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          const searchText = ref.current.value;
          setSearchText(searchText);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
