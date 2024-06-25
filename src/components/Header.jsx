import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { addNewNote } from "../hooks/useNotes";

const Header = ({ notes, setNotes }) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  const handleClose = () => {
    setNewNote({ title: "", content: "" });
    setIsExpanded(false);
  };

  const handleAdd = async () => {
    const fetchedNewNote = await addNewNote(newNote);
    const newNotes = [...notes, fetchedNewNote];
    setNotes(newNotes);

    handleClose();
  };

  return (
    <VStack
      gap={7}
      position="sticky"
      py={5}
      top={0}
      zIndex={100}
      w="100%"
      bg={bgColor}
      boxShadow="xl"
    >
      <HStack gap={5} w="100%" wrap="wrap">
        <Heading>NoteAble</Heading>
        <InputGroup
          w={{
            base: "100%",
            md: "50%",
          }}
        >
          <InputLeftElement pointerEvents="none">
            <Icon as={AiOutlineSearch} />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </HStack>
      <HStack
        w={{
          base: "100%",
          md: "50%",
          xl: "35%",
        }}
      >
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
