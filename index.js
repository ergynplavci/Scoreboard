// när man trycker på +1 så ska 1 poäng läggas till i resp lag osv för 2p o 3p

// score-h hemma poäng
// score-g guest poäng
// add-1-h hemma 1 poäng (-2-h -3-h)
// add-1-g guest 1 poäng (-2-g -3-g)

// textcontent

let homePoints = document.getElementById("home-score");
let guestPoints = document.getElementById("guest-score");

let addOneHome   = document.getElementById("add-1-h");
let addTwoHome   = document.getElementById("add-2-h");
let addThreeHome = document.getElementById("add-3-h");

let addOneGuest   = document.getElementById("add-1-g");
let addTwoGuest   = document.getElementById("add-2-g");
let addThreeGuest = document.getElementById("add-3-g");

function updateScore(team, score) {
    let scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + score;
}