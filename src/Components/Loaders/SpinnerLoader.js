import React from 'react'
import './loader.css';

export const SpinnerLoader = () => {
    return (
        <div className="loader-wrapper">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>

        </div>
    )
}
