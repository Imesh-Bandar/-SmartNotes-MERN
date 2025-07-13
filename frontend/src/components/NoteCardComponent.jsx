import React from 'react'
import { Link } from 'react-router'

const NoteCardComponent = ({ note }) => {
    return (
        <Link to={`/note/${note._id}`} className="no-underline">
        <div className="card w-full bg-base-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-200">
            <div className="card-body p-6">
                <h2 className="card-title text-xl font-semibold text-base-content">
                    {note.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <p className="text-base-content/70 line-clamp-3 text-sm mt-2">
                    {note.content}
                </p>

                <div className="flex justify-between items-center text-xs text-base-content/60 py-3 border-b border-base-200">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>John Doe</span>
                    </div>
                </div>

                <div className="card-actions justify-end mt-4">
                    <Link to={`/note/${note._id}`} className="btn btn-primary btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                    </Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            alert('Delete functionality not implemented');
                        }}
                        className="btn btn-error btn-sm"
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