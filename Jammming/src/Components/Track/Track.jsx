import React from 'react';
import './Track.css';

function Track() {
    const renderAction = () => {
        return <button className="Track-action">+</button>
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Song Name</h3>
                <p>Artist Name | Album Name</p>
                {renderAction()}
            </div>
        </div>
    );
}

export default Track;