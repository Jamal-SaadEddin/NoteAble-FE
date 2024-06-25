import axios from "axios";

export const getAllNotes = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/notes?page=1&limit=100"
    );
    const fetchedNotes = response.data;
    return fetchedNotes;
  } catch (error) {
    console.error("Error fetching notes: ");
    return [];
  }
};

export const addNewNote = async (body) => {
  try {
    const response = await axios.post("http://localhost:3000/notes", body);
    const fetchedNote = response.data;
    return fetchedNote;
  } catch (error) {
    console.error("Error adding new note: ");
    return null;
  }
};

export const updateNote = async (noteId, body) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/notes/${noteId}`,
      body
    );
    const fetchedNote = response.data;
    return fetchedNote;
  } catch (error) {
    console.error("Error updating note: ");
    return null;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/notes/${noteId}`
    );
    const message = response.data;
    return message === "Note deleted";
  } catch (error) {
    console.error("Error deleting note: ");
    return false;
  }
};

export const searchNotes = async (query) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/notes/search?query=${query}`
    );
    const fetchedNotes = response.data;
    return fetchedNotes;
  } catch (error) {
    console.error("Error searching notes: ");
    return [];
  }
};
