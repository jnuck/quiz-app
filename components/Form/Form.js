// Add functionality to add questions from the form page
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Target the main element of the form body
  const formWrapper = document.querySelector('[data-js="form-wrapper"]');

  // Variables for user inputs
  const newQuestionInput = document.querySelector('[data-js="form-question"]');
  const newAnswerInput = document.querySelector('[data-js="form-question"]');
  const newTagInput = document.querySelector('[data-js="form-tag"]');

  // Set and append the card container to main body of form page
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card__container");
  cardContainer.setAttribute("data-js", "card-container");
  formWrapper.append(cardContainer);

  // Set new card body and append to card container
  const newCard = document.createElement("article");
  newCard.classList.add("card");
  newCard.setAttribute("data-js", "card");
  cardContainer.append(newCard);

  // Set new card title and append to card
  const newTitle = document.createElement("div");
  newTitle.classList.add("card__title");
  newCard.append(newTitle);

  // Set the bookmark svg for the new card
  const newBookmark = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  newBookmark.classList.add("card__bookmark");
  newBookmark.setAttribute("data-js", "card-bookmark");
  newBookmark.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newBookmark.setAttribute("width", "24");
  newBookmark.setAttribute("height", "24");
  newBookmark.setAttribute("viewBox", "0 0 24 24");
  newBookmark.setAttribute("fill", "none");
  newBookmark.setAttribute("stroke", "currentColor");
  newBookmark.setAttribute("stroke-width", "2");
  newBookmark.setAttribute("stroke-linecap", "round");
  newBookmark.setAttribute("stroke-linejoin", "round");

  const bookmarkPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  bookmarkPath.setAttribute(
    "d",
    "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
  );
  newBookmark.appendChild(bookmarkPath);
  newTitle.append(newBookmark);

  // Set new question from user input
  const newQuestion = document.createElement("p");
  newQuestion.classList.add("card__question");
  newQuestion.innerText = `${newQuestionInput.value}`;
  newTitle.append(newQuestion);

  // Set new answer from user input
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("card__answer", "card__answer-hidden");
  newAnswer.setAttribute("data-js", "card-answer");
  newAnswer.innerText = `${newAnswerInput.value}`;
  newCard.append(newAnswer);

  // Set button for new card
  const newButton = document.createElement("button");
  newButton.classList.add("card__toggle-answer");
  newButton.setAttribute("data-js", "answer-button");
  newButton.innerText = "Show answer";
  newCard.append(newButton);

  // Set up tag container
  const tagContainer = document.createElement("div");
  tagContainer.classList.add("tag__container");
  newCard.append(tagContainer);

  // Set new tag from user input
  const newTag = document.createElement("p");
  newTag.classList.add("tag");
  newTag.innerText = `#${newTagInput.value}`;
  tagContainer.append(newTag);

  // Test if the button works
  console.log("click");
});

// Build character counter for question and answer inputs
const newQuestionInput = document.querySelector('[data-js="form-question"]');
const newAnswerInput = document.querySelector('[data-js="form-answer"]');

const questionChars = document.querySelector('[data-js="question-chars"]');
const answerChars = document.querySelector('[data-js="answer-chars"]');

newQuestionInput.addEventListener("input", (event) => {
  questionChars.innerText = `${
    150 - event.target.value.length
  } characters remaining`;
});

newAnswerInput.addEventListener("input", (event) => {
  answerChars.innerText = `${
    150 - event.target.value.length
  } characters remaining`;
});
