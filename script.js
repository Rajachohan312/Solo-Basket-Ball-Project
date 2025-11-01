let homeScore = 0;
let guestScore = 0;

let homeDisplay = document.getElementById("display1-el");
let guestDisplay = document.getElementById("display2-el");

function add1Home(){
    homeScore ++;
    homeDisplay.textContent = homeScore;
}
function add2Home(){
    homeScore += 2;
    homeDisplay.textContent = homeScore;
}
function add3Home(){
    homeScore +=  3;
    homeDisplay.textContent =  homeScore;
}

function add1Guest(){
    guestScore++;
    guestDisplay.textContent = guestScore;
}
function add2Guest(){
    guestScore += 2;
    guestDisplay.textContent = guestScore;
}
function add3Guest(){
    guestScore += 3;
    guestDisplay.textContent = guestScore;
}