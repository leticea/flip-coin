let heads = 0;
let tails = 0;

const coin = document.querySelector(".coin");
const flipBtn = document.querySelector("#flip-button");
const resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
  }
})