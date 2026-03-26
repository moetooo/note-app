import React, { useContext, useState } from "react";
import { NotesContext } from "../../store/NotesContext";
import { useNavigate } from "react-router-dom";

function NoteForm() {
  const { createNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    await createNote({ title, content });
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
      <form onSubmit={handleSubmit}>
        {/* Title - always visible */}
        <input
          type="text"
          placeholder={isExpanded ? "Title" : "Take a note..."}
          className="w-full px-6 pt-3 pb-5 bg-transparent text-lg font-semibold text-white placeholder-gray-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          required
        />

        {/* Content - expands on focus (like Google Keep) */}
        {isExpanded && (
          <>
            <textarea
              placeholder="Take a note..."
              className="w-full px-6 py-2 bg-transparent text-gray-300 placeholder-gray-500 outline-none resize-none min-h-[120px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoFocus
              required
            />

            {/* Footer */}
            <div className="flex justify-end gap-2 px-4 py-3 border-t border-gray-700">
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false);
                  setTitle("");
                  setContent("");
                }}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-all rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
              >
                Add Note
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default NoteForm;