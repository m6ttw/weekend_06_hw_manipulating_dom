document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("#new-movie-form");
	form.addEventListener("submit", handleFormSubmit);

	const deleteAllButton = document.querySelector("#delete-all");
	deleteAllButton.addEventListener("click", handleDeleteAllClick);
});

const handleFormSubmit = function (event) {
	event.preventDefault();
	
	const newListItem = document.createElement("li");
	newListItem.textContent = `${this.title.value} ${this.year.value} ${this.genre.value} ${this.director.value} ${this.rating.value}`;
  
	const list = document.querySelector("#movies-list");
	list.appendChild(newListItem);
	
	document.querySelector("#new-movie-form").reset();
};

const handleDeleteAllClick = function (event) {
	const movieList = document.querySelector("#movies-list");
	movieList.innerHTML = "";
}