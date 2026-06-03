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
    const trackIds = playlistTracks.map((track) => track.id);

    console.log("Saving playlist to Spotify with URIs:", trackIds);

    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  const search = (searchTerm) => {
    const filteredResults = mockTracks.filter(track => 
      track.name.toLowerCase().includes(searchTerm.toLowerCase()) || track.artist.toLowerCase().includes(searchTerm.toLowerCase()) || track.album.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setSearchResults(filteredResults);
  }

  const filteredResults = searchResults.filter((searchTrack) => !playlistTracks.some((playlistTrack) => playlistTrack.id === searchTrack.id));

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={filteredResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;