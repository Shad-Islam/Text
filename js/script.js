const input = document.querySelector("#input");
const resetBtn = document.querySelector(".container__details-reset");
const count = document.querySelector(".container__details-title span");
const countBtn = document.querySelector(".container__details-countBtn");
const upperCaseBtn = document.querySelector(".container__details-upperCase");
const lowerCaseBtn = document.querySelector(".container__details-lowerCase");

// word count fuction
function wordCounter(input) {
  let inputValue = input.value ? input.value : 0;
  let wordCount = inputValue.split(/\s+/).length;
  count.textContent = wordCount;
}
countBtn.addEventListener("click", function () {
  wordCounter(input);
});
// upper case fuction
function wordUpperCase(input) {
  input.value = input.value.toUpperCase();
}
upperCaseBtn.addEventListener("click", function () {
  wordUpperCase(input);
});
// lower case fuction
function wordLowerCase(input) {
  input.value = input.value.toLowerCase();
}
lowerCaseBtn.addEventListener("click", () => {
  wordLowerCase(input);
});
// reset button
function reset(input) {
  input.value = "";
  count.textContent = 0;
}
resetBtn.addEventListener("click", () => {
  reset(input);
});
