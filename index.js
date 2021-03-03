var btn1 = document.querySelector('.go-button');

// BUTTON
function randomizer() {
  // FIRST DICE
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.img1').setAttribute("src", "images/dice" + randomNumber1 + ".png");
    // SECOND DICE
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.img2').setAttribute("src", "images/dice" + randomNumber2 + ".png");
    // HEADER
      if (randomNumber1 > randomNumber2) {
         document.querySelector('.header').textContent = "🚩 Player 1 wins!";
      }
      else if (randomNumber1 < randomNumber2) {
        document.querySelector('.header').textContent = "Player 2 wins! 🚩";
      }
      else {
        document.querySelector('.header').textContent = "Draw!";
      }
}

btn1.onclick = randomizer;
