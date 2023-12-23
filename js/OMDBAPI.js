import axios from 'axios'

const OMDB_API = 'https://www.omdbapi.com/?apikey=11aa61d6&s=frozen'

const fetchMovies = () => {
    axios.get(OMDB_API)
        .then(res => {
            console.log(res)
            const h1El = document.querySelector('h1');
            const imgEl = document.querySelector('img');
            h1El.textContent = res.data.Search[0].Title;
            imgEl.src = res.data.Search[0].Poster;
        });
}
fetchMovies();