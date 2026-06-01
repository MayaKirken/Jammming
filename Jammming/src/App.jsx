import React, { useState } from 'react';
import './App.css';
import SearchBar from  './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';
import mockTracks from './mockData';

function App() {
  const [searchResults, setSearchResults] = useState(mockTracks);
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