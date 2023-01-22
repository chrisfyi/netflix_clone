const API_KEY = "d4b67a96d3a10940f94ef1be610dfdbf";

const requests = {
    fetchTrendingMovies:`/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTrendingShows: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // fetchMovieTrailers: `/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`,


}

export default requests;