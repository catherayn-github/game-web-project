import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    
    <Box
      width="100%"
      height="100%"
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.10)",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
      }}
      
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
