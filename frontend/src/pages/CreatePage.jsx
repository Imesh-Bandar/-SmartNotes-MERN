import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import api from '../lib/axios.js'
const CreatePage = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <label className="block mb-2 text-lg font-semibold text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="block mb-2 text-lg font-semibold text-gray-700">
                    Content
                </label>
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="textarea textarea-bordered w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={6}
                ></textarea>
                <div className="flex items-center">
                    <button
                        className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
                        onClick={(e) => handleSubmit(e)}
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create Note'}
                    </button>
                    <Link
                        to="/"
                        className="btn btn-ghost ml-4 text-blue-600 hover:underline"
                    >
                        Back
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CreatePage