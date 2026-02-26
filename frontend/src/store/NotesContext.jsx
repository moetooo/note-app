import { createContext, useEffect, useState } from "react";
import API from "../services/api.service";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all notes from backend
    const fetchNotes = async () => {
        setLoading(true);
        try {
            const res = await API.get("/");
            setNotes(res.data);
        } catch (error) {
            console.log("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    // Create a new note
    const createNote = async (noteData) => {
        try {
            const res = await API.post("/", noteData);
            setNotes([res.data, ...notes]);
        } catch (error) {
            console.log("Error creating note:", error);
        }
    };

    // Update an existing note
    const updateNote = async (id, updatedData) => {
        try {
            const res = await API.put(`/${id}`, updatedData);
            setNotes(notes.map((note) => (note._id === id ? res.data : note)));
        } catch (error) {
            console.log("Error updating note:", error);
        }
    };

    // Delete a note
    const deleteNote = async (id) => {
        try {
            await API.delete(`/${id}`);
            setNotes(notes.filter((note) => note._id !== id));
        } catch (error) {
            console.log("Error deleting note:", error);
        }
    };

    return (
        <NotesContext.Provider
            value={{ notes, loading, createNote, updateNote, deleteNote }}
        >
            {children}
        </NotesContext.Provider>
    );
};