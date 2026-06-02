import React, { useState } from 'react';
import './SearchBar.css'; 


function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };
    const searchClick = () => {
        onSearch(term);
    };
    return (
        <div className="SearchBar">
            <input placeholder="Enter a Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton" onClick={searchClick}>SEARCH</button>
        </div>
    );
}


export default SearchBar;