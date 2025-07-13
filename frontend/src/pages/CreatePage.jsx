import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import api from '../lib/axios.js'
const CreatePage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [charCount, setCharCount] = useState(0)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!title || !content) {
            toast.error("Title and content cannot be empty");
            setLoading(false)
            return
        } else {
            try {

                setLoading(true)

                await api.post('/notes/createNote', {
                    title,
                    content
                })
                navigate('/');
                toast.success("Note created successfully");
                setTitle('')
                setContent('')
                setLoading(false)
            } catch (error) {
                toast.error("Failed to create note");
                console.error("Error creating note:", error);
                setLoading(false)

            }



        }

        console.log("Creating note with title:", title, "and content:", content)
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Form Section */}
                    <div className="flex-1">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold mb-6">Create New Note</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Title</span>
                                            <span className="label-text-alt">{title.length}/100</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your note title..."
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            maxLength={100}
                                            className="input input-bordered w-full focus:input-primary transition-all duration-300"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg font-medium">Content</span>
                                            <span className="label-text-alt">{content.length}/1000</span>
                                        </label>
                                        <textarea
                                            placeholder="Write your note content here..."
                                            value={content}
                                            onChange={(e) => {
                                                setContent(e.target.value)
                                                setCharCount(e.target.value.length)
                                            }}
                                            maxLength={1000}
                                            className="textarea textarea-bordered min-h-[200px] focus:textarea-primary transition-all duration-300"
                                            rows={8}
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                        <button
                                            type="submit"
                                            className={`btn btn-primary flex-1 md:flex-none ${loading ? 'loading' : ''}`}
                                            disabled={loading || !title || !content}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="loading loading-spinner"></span>
                                                    Creating...
                                                </>
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                    Create Note
                                                </>
                                            )}
                                        </button>
                                        <Link
                                            to="/"
                                            className="btn btn-ghost btn-outline"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Back
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="flex-1">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold mb-6">Preview</h2>
                                <div className="preview-area prose">
                                    <h1 className="text-xl font-bold mb-4">
                                        {title || 'Untitled Note'}
                                    </h1>
                                    <p className="whitespace-pre-wrap">
                                        {content || 'Your note content will appear here...'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePage