// Make bookmarks clickable and toggle the fill color
const cardBookmarks = document.querySelectorAll('[data-js="card-bookmark"]');

cardBookmarks.forEach((cardBookmark) => {
  cardBookmark.addEventListener("click", () => {
    cardBookmark.classList.toggle("card__bookmark-checked");
  });
});

// Add functionality for buttons to hide/show the answers
const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach((card) => {
  const answer = card.querySelector('[data-js="card-answer"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');

  answerButton.addEventListener("click", () => {
    if (answer.classList.contains("card__answer-hidden")) {
      answer.classList.toggle("card__answer-hidden");
      answerButton.innerText = "Hide answer";
    } else {
      answer.classList.toggle("card__answer-hidden");
      answerButton.innerText = "Show answer";
    }
  });
});
