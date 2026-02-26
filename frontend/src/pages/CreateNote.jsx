import React from "react";
import NoteForm from "../components/notes/NoteForm";

function CreateNote() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create a New Note
        </h1>
        <NoteForm />
      </div>
    </div>
  );
}

export default CreateNote;