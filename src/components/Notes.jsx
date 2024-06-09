import { HStack } from "@chakra-ui/react";
import React from "react";
import Note from "./Note";

const Notes = ({ notes, setNotes }) => {
  return (
    <HStack w="100%" flexWrap="wrap" justifyContent="flex-start" spacing={4}>
      {notes.map((note) => (
        <Note note={note} key={note._id} notes={notes} setNotes={setNotes} />
      ))}
    </HStack>
  );
};

export default Notes;
