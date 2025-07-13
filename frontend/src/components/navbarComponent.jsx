import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState('light')
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <div className="w-full drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} />
            <div className="drawer-content flex flex-col">
                <header className="navbar bg-base-100 fixed top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-90">
                    <div className="container mx-auto px-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 pl-0">
                                <div className="avatar">
                                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="/smart-notes-logo.png" alt="SN" />
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-primary">SmartNotes</h2>
                            </div>
                        </div>

                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <div className="flex items-center gap-2">
                                <div className="form-control">
                                    <input type="text" placeholder="Search notes..." className="input input-bordered input-sm w-48 md:w-64" />
                                </div>

                                <nav className="menu menu-horizontal px-1 gap-2">
                                    <Link to={"/"} className={`btn btn-sm ${isActive('/') ? 'btn-primary' : 'btn-ghost'} hover:scale-105 transition-transform`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Home
                                    </Link>
                                    <Link to={"/about"} className={`btn btn-sm ${isActive('/about') ? 'btn-primary' : 'btn-ghost'} hover:scale-105 transition-transform`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        About
                                    </Link>
                                    <Link to={"/create"} className="btn btn-sm btn-primary hover:scale-105 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                        Create Note
                                    </Link>
                                </nav>

                                <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
                                    {theme === 'light' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Mobile drawer */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 h-full bg-base-200">
                    <div className="form-control mb-4">
                        <input type="text" placeholder="Search notes..." className="input input-bordered w-full" />
                    </div>
                    <nav className="flex flex-col gap-2">
                        <Link
                            to={"/"}
                            onClick={() => setIsMenuOpen(false)}
                            className={`btn btn-sm ${isActive('/') ? 'btn-primary' : 'btn-ghost'} justify-start`}
                        >
                            Home
                        </Link>
                        <Link
                            to={"/about"}
                            onClick={() => setIsMenuOpen(false)}
                            className={`btn btn-sm ${isActive('/about') ? 'btn-primary' : 'btn-ghost'} justify-start`}
                        >
                            About
                        </Link>
                        <Link
                            to={"/create"}
                            onClick={() => setIsMenuOpen(false)}
                            className="btn btn-sm btn-primary justify-start"
                        >
                            Create Note
                        </Link>
                    </nav>
                    <div className="mt-auto">
                        <button onClick={toggleTheme} className="btn btn-block">
                            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent