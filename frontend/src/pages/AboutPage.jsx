import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AboutPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-6xl font-bold text-primary mb-4">About SmartNotes</h1>
                    <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
                        SmartNotes is a full-stack MERN application designed to help you organize your notes efficiently.
                        Built with MongoDB, Express, React, and Node.js, it offers a seamless experience for creating, editing, and managing your notes securely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Easy to Use</h2>
                            <p>Intuitive interface designed for seamless note-taking and organization</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Secure Storage</h2>
                            <p>Your notes are encrypted and safely stored in MongoDB database</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Real-time Sync</h2>
                            <p>Access your notes from anywhere with automatic synchronization</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <button className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                        Learn More
                    </button>
                    <button
                        className="btn btn-secondary btn-lg hover:scale-105 transition-transform"
                        onClick={() => navigate('/')}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutPage