import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css'
import requests from './requests.js';

function Row({title, url, large}) {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetcher(){
            const request = await axios.get(url);
            setMovies(request.data.results);
            return request
        }
        fetcher();
    },[url]);
    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className="row__posters">
                {movies.map(movie => {
                    let nameClass = `row__poster ${large && "row__large"}`;
                    return(<img key={movie.id} className={nameClass} src={large ? requests.basePosterUrl + movie.poster_path : requests.basePosterUrl + movie.backdrop_path} alt={movie.name}/>);
                })}
            </div>
        </div>
    )
}

export default Row
