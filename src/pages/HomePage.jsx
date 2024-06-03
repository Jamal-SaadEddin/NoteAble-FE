import { Box } from "@chakra-ui/react";
import React from "react";
import Notes from "../components/Notes";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <Box p={5} display="flex" gap={7} flexDir="column">
      <Header />
      <Notes />
    </Box>
  );
};

export default HomePage;
