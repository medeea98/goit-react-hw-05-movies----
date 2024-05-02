import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../api';
import { Nav } from '../Nav/Nav';

export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const data = await searchMovies(searchQuery);
            setSearchResults(data);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div>
            <Nav />
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {searchResults.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}