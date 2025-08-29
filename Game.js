let score = 0;
let clickValue = 1;

function addClicks() {
  const click = document.getElementById("click");
  click.onclick( = () => {
    const storeScore = document.createElement("h1").id = "score";
    score += clickValue;
    storeScore.innerText = "Score: " + score;
  });
}
