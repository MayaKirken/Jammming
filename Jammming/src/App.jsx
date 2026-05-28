import React, { useState } from 'react';
import './App.css';
import SearchBar from  './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across the Water', uri: "spotify:track:5S47C20X1X1P" }, 
    { id: '2', name: 'Blue Monday', artist: 'New Order', album: 'Power, Corruption & Lies', uri: "spotify:track:273K4X9X2X2P" },
    { id: '3', name: 'Let It Happen', artist: 'Tame Impala', album: 'Currents', uri: "spotify:track:384L5Y0Y3Y3P" }
  ]);
  const [playlistName, setPlaylistName] = useState('My Awesome Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: '4', name: 'Starlight', artist: 'Muse', album: 'Black Holes and Revelations' },
    { id: '5', name: 'Leave the Door Open', artist: 'Silk Sonic', album: 'An Evening with Silk Sonic' }
  ]);
  
  const addTrack = (track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };
  
  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((savedTrack) => savedTrack.id !== track.id));
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);

    console.log("Saving playlist to Spotify with URIs:", trackUris);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;