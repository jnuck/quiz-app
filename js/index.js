// Make bookmarks clickable and toggle the fill color
const cardBookmarks = document.querySelectorAll('[data-js="card-bookmark"]');

cardBookmarks.forEach((cardBookmark) => {
  cardBookmark.addEventListener("click", () => {
    cardBookmark.classList.toggle("card__bookmark-checked");
  });
});
