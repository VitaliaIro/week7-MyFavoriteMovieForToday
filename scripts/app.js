const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputMovieYear')
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector ('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year')


if(titleInStorage, imageUrlInStorage, yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(183, 183, 234, 0.267), rgba(23, 19, 19, 0.415)),
    url('${imageUrlInStorage}')`;   
};

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle. value; 
    let posterUrlInput = moviePosterUrl. value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(183, 183, 234, 0.267), rgba(23, 19, 19, 0.415)),
    url('${posterUrlInput}')`;
    movieTitle.value ='';
    moviePosterUrl.value ='';
    movieYear.value ='';
});
