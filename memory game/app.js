const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let scoreOutput = document.getElementById("score")


function flipCard(){
    if (lockBoard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;

    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

function checkForMatch(){
    if (firstCard.dataset.framework === secondCard.dataset.framework){
        diableCards();
        score += 1;
        scoreOutput.innerText= "Uw score is " + score; 

        return;
    }

    unflipCards();

}

function diableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

function unflipCards(){
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
    }, 1500)
}

(function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();
 


cards.forEach(card => card.addEventListener('click', flipCard));

