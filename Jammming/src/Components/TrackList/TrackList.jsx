import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
    console.log("TrackList received tracks:", props.tracks);
        return (
            <div className="TrackList">
                {props.tracks && props.tracks.map(track => {
                    return (
                        <Track 
                            key={track.id}
                            track={track}
                            onAdd={props.onAdd}
                        />
                    );
                })}
            </div>
        );

}

export default TrackList;
