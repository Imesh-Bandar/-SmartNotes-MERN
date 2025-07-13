import React, { useState, useEffect } from 'react'

const RateLimitedUI = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        // Auto close after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        // Progress bar animation
        const interval = setInterval(() => {
            setProgress((prev) => Math.max(prev - 2, 0));
        }, 100);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed top-4 right-4 z-50 ${isVisible ? 'animate-slide-in' : 'animate-slide-out'}`}>
            <div className="card w-80 bg-base-100 shadow-2xl border border-error/20">
                <div className="card-body p-4">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="btn btn-ghost btn-xs absolute top-2 right-2 rounded-full hover:bg-error/20"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="alert alert-error shadow-sm">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-error/20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current h-5 w-5" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm mb-1">Rate Limit Exceeded</h3>
                                <p className="text-xs opacity-90">Please wait a moment and try again.</p>
                            </div>
                        </div>
                    </div>
                    <progress
                        className="progress progress-error w-full mt-3"
                        value={progress}
                        max="100"
                    ></progress>
                </div>
            </div>
        </div>
    )
}
 

export default RateLimitedUI