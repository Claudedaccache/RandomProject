import data from "../data.js";
let categories = document.querySelectorAll(".categoryItem");
let Reasons = document.querySelector(".Reasons");
let Remember = document.querySelector(".Remember");
let TodoList = document.querySelector(".TodoList");
let categoryItemText = document.querySelector(".categoryItemText");
let clickMeButton = document.querySelector(".clickMeButton");
let cardsMessage = document.querySelector(".cardsMessage");

console.log(data.Reasons.length);
console.log(data.Remember.length);
console.log(data.HaveToDo.length);

function randomInt(limit) {
  return Math.floor(Math.random() * Math.floor(limit));
}

function randomCategory(choices) {
  const index = randomInt(choices.length);
  return choices[index];
}

clickMeButton.addEventListener("click", () => {
  let selectedItem = randomCategory(categories);
  switch (true) {
    case selectedItem.classList.contains("Reasons"):
      Remember.style.display = "none";
      TodoList.style.display = "none";
      selectedItem.style.width = "12rem";
      selectedItem.style.height = "9rem";
      selectedItem.style.backgroundColor = "rgb(182, 50, 50,0.8)";
      categoryItemText.style.fontSize = "1.7rem";
      clickMeButton.style.display = "none";
      cardsMessage.innerHTML = randomCategory(data.Reasons);
      cardsMessage.style.fontSize = "1.5rem";
      cardsMessage.style.fontFamily = "italic";

      break;

    case selectedItem.classList.contains("Remember"):
      Reasons.style.display = "none";
      TodoList.style.display = "none";
      selectedItem.style.width = "12rem";
      selectedItem.style.height = "9rem";
      selectedItem.style.backgroundColor = "rgb(123, 123, 204)";
      categoryItemText.style.fontSize = "2rem";
      clickMeButton.style.display = "none";
      cardsMessage.innerHTML = randomCategory(data.Remember);
      cardsMessage.style.fontSize = "1.5rem";
      cardsMessage.style.fontFamily = "italic";

      break;

    case selectedItem.classList.contains("TodoList"):
      Reasons.style.display = "none";
      Remember.style.display = "none";
      selectedItem.style.width = "12rem";
      selectedItem.style.height = "9rem";
      selectedItem.style.backgroundColor = "rgb(163, 66, 228)";
      categoryItemText.style.fontSize = "2.5rem";
      clickMeButton.style.display = "none";
      cardsMessage.innerHTML = randomCategory(data.HaveToDo);
      cardsMessage.style.fontSize = "1.5rem";
      cardsMessage.style.fontFamily = "italic";

      break;
    default:
  }
});
