import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Hero.css';

function Hero(){
    let [movie, setMovie] = useState({});
    useEffect(() => {
        async function fetcher(){
            let request = await axios.get(requests.netflix);
            let random = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            setMovie(random);
        }
        fetcher();
    }, []);
    console.log(movie);

    return (
        <div className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${requests.basePosterUrl + movie.backdrop_path})`
            }}
        >
            <div className="content">
                <h1 className="title">{movie.original_name}</h1>
                <div className="buttons">
                    <button>Play</button>
                    <button>Watch Later</button>
                </div>
                <p>
                    {movie.overview}
                </p>
            </div>
            <div className='fade_effect'>

            </div>
        </div>
    );
}
export default Hero