import {
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

const Header = () => {
  return (
    <HStack gap={5}>
      <Heading>NoteAble</Heading>
      <InputGroup w="50%">
        <InputLeftElement pointerEvents="none">
          <Icon as={AiOutlineSearch} />
        </InputLeftElement>
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </HStack>
  );
};

export default Header;
