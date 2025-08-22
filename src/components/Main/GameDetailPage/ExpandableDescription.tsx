import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableDescription = ({ children }: Props) => {
  const maxChars = 500;

  if (children.length <= maxChars) return <Text> {children} </Text>;

  const [isExpanded, setExpanded] = useState(true);

  const text = isExpanded
    ? children.substring(0, maxChars) + " ... "
    : children;

  return (
    <>
      <Text textAlign={'justify'}>
        {text}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={2}
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Read More" : "Show Less"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableDescription;
