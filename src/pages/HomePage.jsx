import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Notes from "../components/Notes";

const HomePage = () => {
  return (
    <Box px={5} pb={5} display="flex" gap={7} flexDir="column">
      <Header />
      <Notes />
    </Box>
  );
};

export default HomePage;
