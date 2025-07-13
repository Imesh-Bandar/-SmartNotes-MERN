import React, { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../lib/axios.js'
import toast from 'react-hot-toast'
import LoadingComponent from '../components/LoadingComponent.jsx';

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //navigation hanlde
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        setLoading(true);
        await api.delete(`/notes/deleteNote/${id}`);
        toast.success("Note deleted successfully");
        navigate('/');
      } catch (error) {
        toast.error("Failed to delete note");
      } finally {
        setLoading(false);
      }
    }
  }


  const getSignleNote = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/notes/${id}`);
      setNote(response.data);
      setTitle(response.data.title);
      setContent(response.data.content);
      toast.success("Note fetched successfully");
    } catch (error) {
      console.error("Error fetching note:", error);
      toast.error("Failed to fetch note");
      navigate('/');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSignleNote();
  }, [id])

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error("Title and content cannot be empty");
      return;
    }
    try {
      setSaving(true);
      setLoading(true);
      await api.put(`/notes/edit/${id}`, {
        title,
        content
      });
      toast.success("Note updated successfully");
      navigate('/');
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* add loading */}
        {loading && (
          <LoadingComponent />)}

        <div className="flex flex-col md:flex-row gap-6">
          {/* Form Section */}
          <div className="flex-1">
            <div className="card bg-base-100 shadow-xl relative">
              {/* Delete Button */}
              <button
                className="absolute top-4 right-4 btn btn-error btn-sm flex items-center gap-1"
                onClick={handleDelete}
                title="Delete Note"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Delete
              </button>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
                  </svg>
                  Edit Note
                </h2>
                <form onSubmit={handleEdit} className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">Title</span>
                      <span className={`label-text-alt ${title.length === 100 ? 'text-error font-bold' : ''}`}>{title.length}/100</span>
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={100}
                      className={`input input-bordered w-full focus:input-primary transition-all duration-300 ${title.length === 100 ? 'border-error' : ''}`}
                      placeholder="Enter note title"
                      autoFocus
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">Content</span>
                      <span className={`label-text-alt ${content.length === 1000 ? 'text-error font-bold' : ''}`}>{content.length}/1000</span>
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      maxLength={1000}
                      className={`textarea textarea-bordered min-h-[200px] focus:textarea-primary transition-all duration-300 ${content.length === 1000 ? 'border-error' : ''}`}
                      rows={8}
                      placeholder="Write your note here..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="submit"
                      className={`btn btn-primary flex-1 md:flex-none ${saving ? 'loading' : ''}`}
                      disabled={saving || !title || !content}
                    >
                      {saving ? (
                        <>
                          <span className="loading loading-spinner"></span>
                          Saving...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                          </svg>
                          Save Changes
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
                {/* Tips or Info */}
                <div className="mt-6 text-xs text-gray-400 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                  Tip: Use <kbd className="kbd kbd-xs">Ctrl</kbd> + <kbd className="kbd kbd-xs">S</kbd> to save quickly.
                </div>
              </div>
            </div>
          </div>
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


export default NoteDetailPage