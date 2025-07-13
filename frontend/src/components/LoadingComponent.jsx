import React from 'react'

const LoadingComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <div className="loading loading-spinner loading-lg text-primary"></div>
            <p className="text-center text-primary mt-4">Fetching your notes...</p>
        </div>
    )
}

export default LoadingComponent