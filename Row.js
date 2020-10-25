import React, { useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";

function Row({title}) {
    const [movies, setMovies] = useState([]);

// A snippet fo code which runs based on a specific condition
useEffect(() => {
    // if [] , run once when the row loads , and dont run again
    async function fetchData() {
    const request = await axios.get(fetchUrl);
    console.log(request);
    return request;
 }
 fetchData();
}, [fetchUrl]);

console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                    key={movie.id}
                    className={'row__poster ${isLargeRow && "row__posterLarge"}'}
                    src={'${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }'}
                   alt={movie.naeme   }

                />
                ))}
            </div>
                {/* container -> posters*/  }
        </div>
    )
}

export default Row