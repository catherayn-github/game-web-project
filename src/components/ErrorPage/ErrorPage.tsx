import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

const ErrorPage = () => {
  const error = useRouteError();

  const isRouteValid = isRouteErrorResponse(error);

  return (
    <div>
      <NavigationBar />
      <Box padding={8}>
        <Heading> Opss</Heading>
        <Text>
          {isRouteValid ? "Page does not exist" : "Unexpected Error occured"}
        </Text>
      </Box>
    </div>
  );
};

export default ErrorPage;
