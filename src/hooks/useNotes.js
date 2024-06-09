import axios from "axios";

export const getAllNotes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/notes");
    const fetchedNotes = response.data;
    return fetchedNotes;
  } catch (error) {
    console.error("Error fetching notes: ");
    return [];
  }
};
