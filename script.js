const button = document.querySelector(".btn");
const counter = document.querySelector(".counter");
var count = 1;
button.addEventListener("click", () => {
  counter.innerHTML = count;
  count = count + 1;
});
