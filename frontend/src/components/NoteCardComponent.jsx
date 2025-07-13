import React from 'react'
import { Link } from 'react-router'
import api from '../lib/axios.js'
import toast from 'react-hot-toast'

const NoteCardComponent = ({ note, fetchNotes }) => {
    const handleDelete = async (e, id) => {
        e.preventDefault();//stop navigation
        const confirmed = window.confirm("Are you sure you want to delete this note?");
        if (!confirmed) return;
        try {
            await api.delete(`/notes/deleteNote/${id}`);
            toast.success("Note deleted successfully");
            fetchNotes(); // Refresh notes after deletion
            // Optionally, trigger a refresh or callback here
        } catch (error) {
            toast.error("Failed to delete note");
        }
    }
    return (
        <Link to={`/note/${note._id}`} className="block no-underline group">
            <div className="card w-full bg-base-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-200 relative overflow-hidden">
                {/* Priority indicator */}
                <div className="absolute top-0 right-0 w-12 h-12">
                    <div className="absolute transform rotate-45 bg-primary text-white text-xs py-1 right-[-35px] top-[15px] w-[120px] text-center">
                        Priority
                    </div>
                </div>

                <div className="card-body p-6">
                    <div className="flex justify-between items-start">
                        <h2 className="card-title text-xl font-semibold text-base-content group-hover:text-primary transition-colors">
                            {note.title}
                            {note.isNew && (
                                <div className="badge badge-secondary animate-pulse">NEW</div>
                            )}
                        </h2>
                    </div>

                    <div className="flex gap-2 my-2">
                        {['personal', 'work', 'important'].map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded-full bg-base-200 text-xs text-base-content/70">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-base-content/70 line-clamp-3 text-sm mt-2 leading-relaxed">
                        {note.content}
                    </p>

                    <div className="flex justify-between items-center text-xs text-base-content/60 py-3 mt-4 border-t border-base-200">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="hover:text-primary transition-colors">
                                    {new Date(note.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="hover:text-primary transition-colors">John Doe</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-actions justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                            to={`/note/${note._id}`}
                            className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit
                        </Link>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDelete(e, note._id);
                            }}
                            className="btn btn-error btn-sm hover:scale-105 transition-transform"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCardComponent