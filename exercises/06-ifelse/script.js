// const SECRET_NUMBER = 42;

// const yourGuess = prompt("What number do I have in mind?");

// if (yourGuess > SECRET_NUMBER) {
//   alert("Too high!");
// } else if (yourGuess < SECRET_NUMBER) {
//   alert("Too low!");
// } else {
//   alert("Kudos!");
// }

// const guess = prompt("What's the “official” name of JavaScript?");

// if (guess === "ECMAScript") {
//   alert('Right!');
// } else {
//   alert("You don't know? “ECMAScript”!");
// }

// let answer
// if (guess === "ECMAScript") {
//   answer = 'Right!';
// } else {
//   answer = "You don't know? “ECMAScript”!";
// }
// alert(answer);

// const answer = guess === "ECMAScript" ? 'Right!' : "You don't know? “ECMAScript”!";
// alert(answer);

let guess = prompt('Give me a number');

if (guess > 0) {
  alert(1);
} else if (guess < 0) {
  alert(-1); 
} else {
  alert(0);
}
