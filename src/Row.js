import React, {useState, useEffect} from 'react'
import axios from './axios';

const basePosterUrl = "https://image.tmbd.org/t/p/original/";
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
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies.map(movie => {
                    console.log(basePosterUrl + movie.poster_path);
                    // return(<img src={basePosterUrl + movie.poster_path} alt={movie.name}/>);
                })}
            </div>
        </div>
    )
}

export default Row
