import React, { useState, useEffect } from 'react';
import { CLIENT_RENEG_LIMIT } from 'tls';
import axions from './axios';
import request from './Requests';
import './Banner,css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
         const request = await axios.get(requests.fetchNeflixOriginals};
         console.log(
          setMovie(
             requests.data.results[
                 Math.floor(Math.random() * request.data.results.length)

             ]
          );
    
          return request;
           
        }
        fetchData();
    }, [];

    console.log(movie);
    function truncate{str, n} {
        return str?.lenght > n ? str.substr(0, n -1) + "..." :
    }



    return (
        <header className="banner">
            style={{
                backgroundSize: "cover",
                backgroundImage: 'url(
                  "https://image.tmdb.org/t/p/orignal/${movie?.backdrop_path}"  
                )',
                backgroundPosition: "center center",
            }}
         >
             <div className="banner__contents">

                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.origninal_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                
                 <h1 className="banner__description">
                  {trucate{movie?.overview, 150)}
                 </h1>
             </div>
             <div className="banner--fadeBottom" />
        </header>
    );

}

export default Banner;