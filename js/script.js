// word counter //
const input = document.querySelector("#input");
const countBtn = document.querySelector(".container__details-btns");
const count = document.querySelector(".container__details-title span");

function wordCounter(input) {
  let inputValue = input.value;
  let wordCount = inputValue.split(/\s+/).length;
  count.textContent = wordCount;
}

countBtn.addEventListener("click", function () {
  wordCounter(input);
});

// wordCounter(input);
