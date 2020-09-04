import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css'

const basePosterUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, url}) {
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
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => {
                    return(<img key={movie.id} className="row__poster" src={basePosterUrl + movie.poster_path} alt={movie.name}/>);
                })}
            </div>
        </div>
    )
}

export default Row
