import React, { useEffect } from "react";
import NavbarComponent from "../components/navbarComponent.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import { useState } from "react";
import api from "../lib/axios.js";
import axios from "axios";

import toast from "react-hot-toast";
import NoteCardComponent from "../components/NoteCardComponent.jsx";
import { Link } from "react-router";
const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]); // Assuming you might want to manage notes in the future
    const [loading, setLoading] = useState(true); // Assuming you might want to manage loading state in the future

    //data fetching function for notes

    const fetchNotes = async () => {
        try {
            const response = await api.get("/notes");
            const data = response.data;
            console.log(data);
            setNotes(data);
        } catch (error) {
            console.error(error);
            //toast.error(error.message);
            // error status code ==429
            if (error.response?.status === 429) {
                setIsRateLimited(true);
                toast.error("Rate limit exceeded. Please try again later.", {
                    duration: 4000,
                    icon: "⏳",
                    id: "rate-limit",
                    style: { background: "#fff3cd", color: "#856404" },
                    position: "top-center",
                    // Provide a close button
                    action: {
                        text: "Close",
                        onClick: (t) => toast.dismiss(t.id),
                    },
                });
            }
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchNotes();
    }, []);

    return (
        <div className="min-h-screen bg-base-200">
            <NavbarComponent />

            {isRateLimited && <RateLimitedUI />}


            <div className="hero bg-base-100 shadow-lg py-8 mb-8">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-primary">Smart Notes</h1>
                        <p className="py-6">
                            Organize your thoughts, capture ideas, and boost your productivity with Smart Notes.
                        </p>
                        <div className="join flex justify-center mb-4">
                            <input
                                className="input input-bordered join-item w-full max-w-xs"
                                placeholder="Search notes..."
                            />
                            <button className="btn btn-primary join-item">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {loading ? (
                    <div className="flex flex-col items-center justify-center mt-8">
                        <div className="loading loading-spinner loading-lg text-primary"></div>
                        <p className="text-center text-primary mt-4">Fetching your notes...</p>
                    </div>
                ) : (
                    !isRateLimited && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {notes.length === 0 ? (
                                <div className="col-span-full text-center py-10">
                                    <div className="card bg-base-100 shadow-xl p-6">
                                        <h2 className="text-2xl font-semibold mb-2">No Notes Yet</h2>
                                        <p className="text-base-content/70">Start creating your first note!</p>
                                        
                                        <Link to={"/create"} className="btn btn-primary mt-4">
                                            Create Note
                                            </Link>
                                         
                                    </div>
                                </div>
                            ) : (
                                notes.map((note) => (
                                    <div
                                        key={note._id}
                                        className="card-container hover:scale-105 transition-transform duration-200"
                                    >
                                        <NoteCardComponent note={note}  fetchNotes={fetchNotes}/>
                                    </div>
                                ))
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default HomePage;
