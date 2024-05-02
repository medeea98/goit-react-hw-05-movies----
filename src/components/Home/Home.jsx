import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api';
import { Nav } from '../Nav/Nav';

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies();
            setTrendingMovies(data.results);
        };
        fetchTrendingMovies();
    }, []);

    return (
        <div>
            <Nav />
            <h1>Trending today</h1>
            <ul>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
