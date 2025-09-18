
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