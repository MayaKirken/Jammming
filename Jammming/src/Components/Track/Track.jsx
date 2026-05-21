import React from 'react';
import './Track.css';

function Track(props) {
    const renderAction = () => {
        return <button className="Track-action">+</button>
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>Artist Name | Album Name</p>
                {renderAction()}
            </div>
        </div>
    );
}

export default Track;