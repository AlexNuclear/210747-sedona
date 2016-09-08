var link = document.querySelector(".search-button");
var popup = document.querySelector(".searcher-button");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("searcher-button-show");
});
