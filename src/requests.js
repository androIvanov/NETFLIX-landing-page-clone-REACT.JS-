const API_KEY = "018364af09277d87bde627a9b43dee1c";

const endpoints = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default endpoints;