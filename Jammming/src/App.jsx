import React, { useState } from 'react';
import './App.css';
import SearchBar from  './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import Playlist from './Components/Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: '1', name: 'Tiny Dancer', artist: 'Elton John', album: 'Madman Across the Water' }, 
    { id: '2', name: 'Blue Monday', artist: 'New Order', album: 'Power, Corruption & Lies' },
    { id: '3', name: 'Let It Happen', artist: 'Tame Impala', album: 'Currents' }
  ]);
  const [playlistName, setPlaylistName] = useState('My Awesome Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: '4', name: 'Starlight', artist: 'Muse', album: 'Black Holes and Revelations' },
    { id: '5', name: 'Leave the Door Open', artist: 'Silk Sonic', album: 'An Evening with Silk Sonic' }
  ]);
  console.log("App current search results:", searchResults);
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;