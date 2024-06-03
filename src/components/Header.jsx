import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleClose = () => {
    setNewNote({ title: "", content: "" });
    setIsExpanded(false);
  };

  const handleAdd = () => {
    // Add new note to the DB
    // ...

    handleClose();
  };

  return (
    <VStack gap={7}>
      <HStack gap={5} w="100%">
        <Heading>NoteAble</Heading>
        <InputGroup w="50%">
          <InputLeftElement pointerEvents="none">
            <Icon as={AiOutlineSearch} />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </HStack>
      <HStack w="30%">
        <VStack
          w="100%"
          p={1}
          border={isExpanded ? "1px solid" : "none"}
          borderColor="inherit"
          borderRadius="0.375rem"
        >
          <Input
            placeholder="Title"
            border="none"
            _focus={{ boxShadow: "none" }}
            display={isExpanded ? "block" : "none"}
            value={newNote.title}
            onInput={(event) =>
              setNewNote({ ...newNote, title: event.target.value })
            }
          />
          <Input
            placeholder="Take a note..."
            onFocus={() => setIsExpanded(true)}
            border={isExpanded ? "none" : "1px solid"}
            borderColor="inherit"
            _focus={{ boxShadow: "none" }}
            value={newNote.content}
            onInput={(event) =>
              setNewNote({ ...newNote, content: event.target.value })
            }
          />
          <HStack alignSelf="end" gap={0}>
            <Button
              bg="none"
              _hover={{ bg: "none" }}
              onClick={handleClose}
              display={isExpanded ? "block" : "none"}
            >
              Close
            </Button>
            <Button
              colorScheme="teal"
              h="unset"
              py={2}
              onClick={handleAdd}
              display={isExpanded ? "block" : "none"}
              isDisabled={
                newNote.content.replace(/\s/g, "") === "" ||
                newNote.title.replace(/\s/g, "") === ""
                  ? true
                  : false
              }
            >
              Add
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Header;
