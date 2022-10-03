const API_KEY = "3e7eb911aba4dbc7c2a6d76f0d425262";

const requests = [
    {
        title : 'Trending',
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        isLarge : true
    },
    {
        title : 'Netflix Originals',
        url : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge : false
    },
    {
        title : 'Top Rated',
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        isLarge : false
    },
    {
        title : 'Action Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        isLarge : false
    },
    {
        title : 'Comedy Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        isLarge : false
    },
    {
        title : 'Horror Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        isLarge : false
    },
    {
        title : 'Romance Movies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        isLarge : false
    },
    {
        title : 'Documentaries',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        isLarge : false
    },
]

// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
// }

export default requests;