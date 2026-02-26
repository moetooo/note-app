import React, { useContext } from "react";
import { NotesContext } from "../../store/NotesContext";
import { Trash2, Edit3 } from "lucide-react";

function NoteCard({ note, onEdit }) {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div
      onClick={() => onEdit(note)}
      className="group bg-gray-800 border border-gray-700 rounded-2xl p-5 flex flex-col min-h-[180px] cursor-pointer hover:shadow-xl hover:shadow-blue-500/5 hover:border-gray-500 transition-all duration-300"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-white mb-2 line-clamp-1 break-words">
        {note.title}
      </h2>

      {/* Content */}
      <p className="text-gray-400 text-sm flex-1 line-clamp-6 break-words overflow-hidden whitespace-pre-wrap">
        {note.content}
      </p>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-700 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-gray-500 text-xs">
          {new Date(note.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>

        <div className="flex gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(note);
            }}
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-all"
            title="Edit"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note._id);
            }}
            className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-full transition-all"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;