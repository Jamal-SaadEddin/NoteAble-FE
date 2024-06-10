import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Notes from "../components/Notes";
import { fakeNotes } from "../constants/fakeNotes";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      // const fetchedNotes = await getAllNotes();
      setNotes(fakeNotes);
    };

    fetchNotes();
  }, []);

  return (
    <Box px={5} pb={5} display="flex" gap={7} flexDir="column">
      <Header notes={notes} setNotes={setNotes} />
      {notes ? (
        <Notes notes={notes} setNotes={setNotes} />
      ) : (
        <p>Loading notes...</p>
      )}
    </Box>
  );
};

export default HomePage;
