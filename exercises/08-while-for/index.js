while (iLikeIcecream) {
  eatIcecream()
}

while (!imFull) {
  eatIcecream()
}

let i = 0; // begin
while (i < 3) { // condition
  alert(i);
  i++; // step
}

for (let i = 0; i < 3; i++) { // begin; condition; step
  alert(i);
}

while (true) {
  playTheGame();
  if (hp === 0) break;
}

while (hp > 0) {
  playTheGame();
}

{
  let i = 3;
  while (i) {
    alert(i--);
  }

  // i == 3 -> i != 0 -> alert(3) -> i = 2
  // i == 2 -> i != 0 -> alert(2) -> i = 1
  // i == 1 -> i != 0 -> alert(1) -> i = 0
  // i = 0 -> i == 0
}

{
  for (let num = 2; num <= 10; num++) {
    if (num % 2 === 0) {
      alert(num);
    }
  }

  for (let num = 2; num <= 10; num += 2) {
    alert(num);
  }
}

{
  for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

  let i = 0;
  while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }
}

{
  let num = prompt("Give me a number greater than 100", "");
  // mi fermo quando il numero è maggiore di 100 o quando è vuoto
  // !num || num > 100
  // !(!num || num > 100) -> num && num <= 100
  while (num && num <= 100) {
    num = prompt("Try again...", "");
  }
}

{
  /**
   * Setaccio di Eratostene
   */
  let n = 10;

  for (let nextPrime = 2; nextPrime < n; nextPrime++) {
    let isPrime = true;

    // !(!isPrime || i >= nextPrime)
    for (let i = 2; isPrime && i < nextPrime ** (1/2); i++) {
      if (nextPrime % i === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      alert(nextPrime);
    }
  }
}

{
  const SECRET_NUMBER = 42;

  let guess;
  while (guess !== SECRET_NUMBER) {
    guess = +prompt("Guess my number");
    if (guess > SECRET_NUMBER) {
      alert("Too high!");
    } else if (guess < SECRET_NUMBER) {
      alert("Too low!");
    } else {
      alert("Kudos!");
    }
  }
}
