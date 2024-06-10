import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";
import { fakeNotes } from "../constants/fakeNotes";

const Header = ({ notes, setNotes }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const [isExpanded, setIsExpanded] = useState(false);
  const [newNote, setNewNote] = useState({
    _id: Math.floor(Math.random() * 1000000),
    title: "",
    content: "",
    createdAt: Date.now(),
  });

  const handleClose = () => {
    setNewNote({ title: "", content: "" });
    setIsExpanded(false);
  };

  const handleAdd = async () => {
    // const fetchedNewNote = await addNewNote(newNote);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    handleClose();
  };

  const handleSearch = async (searchQuery) => {
    // const filteredNotes = await searchNotes(searchQuery);
    const filteredNotes = fakeNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  return (
    <VStack
      gap={7}
      position="sticky"
      p={5}
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
          <Input
            type="text"
            placeholder="Search"
            onInput={(e) => handleSearch(e.target.value)}
          />
        </InputGroup>
        <Icon
          as={colorMode === "light" ? MdNightlight : MdOutlineLightMode}
          fontSize={28}
          cursor="pointer"
          onClick={toggleColorMode}
          position="absolute"
          right={5}
          top={5}
        />
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
          <Textarea
            placeholder="Take a note..."
            onFocus={() => setIsExpanded(true)}
            border={isExpanded ? "none" : "1px solid"}
            borderColor="inherit"
            _focus={{ boxShadow: "none" }}
            rows={isExpanded ? 4 : 1}
            resize="none"
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
