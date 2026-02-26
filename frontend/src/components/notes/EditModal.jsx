import React, { useState, useEffect, useContext } from "react";
import { NotesContext } from "../../store/NotesContext";
import { X, Trash2 } from "lucide-react";

function EditModal({ note, onClose }) {
    const { updateNote, deleteNote } = useContext(NotesContext);

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [isVisible, setIsVisible] = useState(false);

    // Animate in on mount
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    // Close with animation
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 200);
    };

    // Save and close
    const handleSave = () => {
        if (title.trim() && content.trim()) {
            updateNote(note._id, { title, content });
        }
        handleClose();
    };

    // Delete and close
    const handleDelete = () => {
        deleteNote(note._id);
        handleClose();
    };

    return (
        // Backdrop
        <div
            onClick={handleSave}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Modal Card */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-gray-800 border border-gray-600 rounded-2xl w-full max-w-lg shadow-2xl transition-all duration-200 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
            >
                {/* Title Input */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full px-6 pt-5 pb-2 bg-transparent text-xl font-semibold text-white placeholder-gray-500 outline-none"
                />

                {/* Content Textarea */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Take a note..."
                    className="w-full px-6 py-2 bg-transparent text-gray-300 placeholder-gray-500 outline-none resize-none min-h-[150px]"
                />

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700">
                    {/* Delete Button */}
                    <button
                        onClick={handleDelete}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-full transition-all"
                        title="Delete"
                    >
                        <Trash2 size={18} />
                    </button>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;
