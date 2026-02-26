import React, { useContext, useState } from "react";
import { NotesContext } from "../store/NotesContext";
import NoteCard from "../components/notes/NoteCard";
import EditModal from "../components/notes/EditModal";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const { notes, loading } = useContext(NotesContext);
  const [editingNote, setEditingNote] = useState(null);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 mt-4">Loading notes...</p>
      </div>
    );
  }

  // Empty state
  if (notes.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
        <PlusCircle size={64} className="text-gray-600 mb-4" />
        <h3 className="text-xl font-bold text-gray-300">No notes yet</h3>
        <p className="text-gray-500 mt-2">
          Create your first note to get started.
        </p>
        <Link
          to="/create"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all"
        >
          Create Note
        </Link>
      </div>
    );
  }

  // Notes grid
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            note={note}
            onEdit={(note) => setEditingNote(note)}
          />
        ))}
      </div>

      {/* Edit Modal - pops up when a note is clicked */}
      {editingNote && (
        <EditModal
          note={editingNote}
          onClose={() => setEditingNote(null)}
        />
      )}
    </>
  );
}

export default Home;