{
  let age = 35;

  if (age >= 14 && age <= 90) {
    console.log("You are an adult");
  }
}

{
  let age = 35;

  if (!(age >= 14 && age <= 90)) {
    console.log("You're not an adult");
  }
}

/** Leggi di De Morgan:
 *  !(a && b) = !a || !b
 *  !(a || b) = !a && !b
 */
{
  let age = 35;

  if (age < 14 || age > 90) {
    console.log("You're not an adult");
  }
}

{
  let username = prompt("Please login:", "");

  if (username === "Admin") {
    
    let password = prompt("What's the password?", "");

    if (password === "TheMaster") {
      alert("Welcome!");
    } else if (!password) { // password === "" || password === null
      alert("Canceled");
    } else {
      alert("Wrong password");
    }

  } else if (!username) { // username === "" || username === null
    alert("Canceled");
  } else {
    alert("I don't know you");
  }
}
