import { HStack } from "@chakra-ui/react";
import React from "react";
import { notes } from "../constants/notes";
import Note from "./Note";

const Notes = () => {
  return (
    <HStack w="100%" flexWrap="wrap" justifyContent="flex-start" spacing={4}>
      {notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </HStack>
  );
};

export default Notes;
