// var main = document.querySelectorAll('.list-wrapper .list-single')

// fetch('https://api.themoviedb.org/3/movie/550?api_key=c87020c3d47d92380a22857457e78265')
// .then(response=>response.json())
// .then(data=>{
//     data.results.map((i,j)=>{

//     })
// })

const API_KEY = '&api_key=c87020c3d47d92380a22857457e78265';
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc' + API_KEY;

const API_URL_D = BASE_URL + '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10' + API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const CARD_URL = 'https://image.tmdb.org/t/p/w500';

const getMovies = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.results.map((i, j) => {
            if(j == 0){
                document.querySelector('main .banner-main .banner')
                .src = IMG_URL + i.backdrop_path;
                
                document.querySelector('main .view .title h1').textContent = i.title;
                document.querySelector('main .view .title p').textContent = i.overview;
            }
            else if(i.poster_path != null){
                document.querySelectorAll('.carousel .box-film')[--j].src= CARD_URL + i.poster_path;
            }
                
        })
    })
}


const getMoviesDrama = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.results.map((i, j) => {
            if(j > 0 && i.poster_path != null)
            document.querySelectorAll('.carousel-films .box-film')[--j].src= CARD_URL + i.poster_path;
        })
    })

}

getMovies(API_URL);
getMoviesDrama(API_URL_D);