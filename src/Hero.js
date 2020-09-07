import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

function Hero(){
    let [movie, setMovie] = useState({});
    useEffect(() => {
        async function fetcher(){
            let request = await axios.get(requests.netflix);
            let random = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            console.log(random);
        }
        fetcher();
    }, []);

    return (
        <div>
            <div>
                <h1>{movie.title}</h1>
            </div>
        </div>
    );
}
export default Hero