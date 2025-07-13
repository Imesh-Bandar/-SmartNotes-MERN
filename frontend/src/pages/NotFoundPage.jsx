import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFoundPage = ({ fetchNote }) => {
    return (
        <div className="p-8 rounded-xl shadow-xl bg-base-100 text-center">
            <div className="mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full transform -translate-y-3 scale-125 z-0"></div>
                <svg className="mx-auto h-32 w-32 text-primary relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className="text-2xl font-semibold text-base-content mb-3">No Notes Found</h2>
            <p className="text-base-content/70 mb-6">Looks like you haven't created any notes yet. Start creating your first note!</p>
            <div className="flex justify-center">
                <Link
                    to="/create"
                    className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-focus transition-colors duration-200"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Your First Note
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage