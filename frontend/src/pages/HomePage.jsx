import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../lib/axios.js";

import NoteCardComponent from "../components/NoteCardComponent.jsx";
import NavbarComponent from "../components/navbarComponent.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import IntroCard from "../components/IntroCard.jsx";
import LoadingComponent from "../components/LoadingComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";

// DESIGN HOME PAGE
const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [notes, setNotes] = useState([]); // Assuming you might want to manage notes in the future
    const [loading, setLoading] = useState(true); // Assuming you might want to manage loading state in the future

    useEffect(() => {
        fetchNotes();
    }, []);

    //data fetching function for notes
    const fetchNotes = async () => {
        try {
            // Set loading state to true before fetching
            //setLoading(true);
            const response = await api.get("/notes");
            const data = response.data;

            //console.log(data);
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

    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center">
            <NavbarComponent />
            {isRateLimited && <RateLimitedUI />}

            <IntroCard />

            <div className="container mx-auto px-4 flex-1 flex justify-center">
                {loading ? (
                    <LoadingComponent />
                ) : (
                    !isRateLimited && (
                        <>
                            {notes.length === 0 ? (
                                <div className="w-full flex justify-center items-center">
                                    <div className="max-w-xl w-full">
                                        <NotFoundPage fetchNotes={fetchNotes} />
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 justify-items-center">
                                    {notes.map((note) => (
                                        <div
                                            key={note._id}
                                            className="card-container hover:scale-105 transition-transform duration-200"
                                        >
                                            <NoteCardComponent note={note} fetchNotes={fetchNotes} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )
                )}
            </div>
            <FooterComponent />
        </div>
    );
};

// Create a simplified version of the "no notes" message that fits the homepage better
 

export default HomePage;
