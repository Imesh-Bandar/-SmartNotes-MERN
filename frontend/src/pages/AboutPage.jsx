import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const AboutPage = () => {
    const navigate = useNavigate()
    return (
        <div
            className="hero min-h-screen"

        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">About SmartNotes</h1>
                    <p className="mb-5">
                        SmartNotes is a full-stack MERN application designed to help you organize your notes efficiently.
                        Built with MongoDB, Express, React, and Node.js, it offers a seamless experience for creating, editing, and managing your notes securely.
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
                </div>
            </div>




        </div>
    )
}

export default AboutPage