const game_length=6;

document.getElementById("page_1_to_2").addEventListener('click', () => { 
  document.getElementById("page2").style.display = "block";
  document.getElementById("page1").style.display = "none";

  startTimer();
})

document.getElementById("page_2_to_1").addEventListener('click', () => { 
  document.getElementById("page1").style.display = "block";
  document.getElementById("page2").style.display = "none";
  clearInterval(handle);
})


document.getElementById("cookie").addEventListener('click', () => {
  if (remaining > 0) {
      score = score +1;
  }
  document.getElementById("score").innerHTML = score;
})

function startTimer() {
  score = 0;
  remaining = game_length;

  handle = setInterval(() => {
    remaining = remaining - 1;
    document.getElementById("remaining").innerHTML = remaining;

    if (remaining <= 0) {
      clearInterval(handle);
    }
  }, 1000)

}