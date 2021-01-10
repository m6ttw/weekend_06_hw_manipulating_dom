document.addEventListener("DOMContentLoaded", () => {
	const newMovieForm = document.querySelector("#new-movie-form");
	newMovieForm.addEventListener("submit", handleFormSubmit);

	const deleteAllButton = document.querySelector("#delete-all");
	deleteAllButton.addEventListener("click", handleClickDeleteAll);
});

const handleFormSubmit = function (event) {
	event.preventDefault();
	
    const movieListItem = createMovieListItem(event.target);
  
	const movieList = document.querySelector("#movie-list");
	movieList.appendChild(movieListItem);
	
	document.querySelector("#new-movie-form").reset();
};

const createMovieListItem = function (form) {
    const MovieListItem = document.createElement('li');
    MovieListItem.classList.add('movie-list-item');
  
    const titleAndYear = document.createElement('h3');
    titleAndYear.textContent = `${form.title.value} (${form.year.value})`;
    MovieListItem.appendChild(titleAndYear);
  
    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    MovieListItem.appendChild(genre);
  
    const director = document.createElement('p');
    director.textContent = `Director: ${form.director.value}`;
    MovieListItem.appendChild(director);
  
    const rating = document.createElement('p');
    rating.textContent = `Rating: ${form.rating.value}/10`;
    MovieListItem.appendChild(rating);
  
    return MovieListItem;
};

const handleClickDeleteAll = function (event) {
	const movieList = document.querySelector("#movie-list");
	movieList.innerHTML = "";
}