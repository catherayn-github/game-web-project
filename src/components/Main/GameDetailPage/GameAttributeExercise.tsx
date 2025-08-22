import { Heading, Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  attributeLabel: string;
  children: ReactNode;
}
const GameAttribute = ({ attributeLabel, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading size={"m"} fontWeight="bold" color={"#71717a"}>
        {attributeLabel}
      </Heading>
      {children}
    </Box>
  );
};

export default GameAttribute;
