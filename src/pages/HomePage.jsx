import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Notes from "../components/Notes";
import { getAllNotes } from "../hooks/useNotes";

const HomePage = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getAllNotes();
      setNotes(fetchedNotes);
    };

    fetchNotes();
  }, []);

  return (
    <Box px={5} pb={5} display="flex" gap={7} flexDir="column">
      <Header notes={notes} setNotes={setNotes} />
      {notes ? <Notes notes={notes} /> : <p>Loading notes...</p>}
    </Box>
  );
};

export default HomePage;
