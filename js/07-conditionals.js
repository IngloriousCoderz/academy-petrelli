// semplice if
// if (someCondition) {
//   doSomething()
// }

// if-else
// if (someCondition) {
//   doSomething()
// } else {
//   doSomethingElse()
// }

// cascata di if-else
// if (someCondition) {
//   doSomething()
// } else if (someOtherCondition) {
//   doSomethingElse()
// } else {
//   goHome()
// }

/**
 * Le funzioni mi consentono di:
 * incapsulare del codice per poterlo riutilizzare
 * documentare il codice
 * "mutizzare" il codice senza commentarlo
 */
function guessTheNumber(secretNumber, yourGuess) {
  if (yourGuess > secretNumber) {
    console.log('Your guess is too high')
  } else if (yourGuess < secretNumber) {
    console.log('Your guess is too low')
  } else {
    console.log('You got it!')
  }
}

guessTheNumber(42, 69)
guessTheNumber(42, 33)
guessTheNumber(42, 42)

/**
 * Codici di status HTTP noti:
 * 
 * 200 -> tutto ok
 *    201 -> tutto ok, ho creato la risorsa
 *    204 -> tutto ok, niente da aggiungere
 * 300 -> ok, ma ho spostato qualcosa
 * 400 -> hai sminchiato qualcosa
 *    401 -> richiesta malformata
 *    403 -> non autorizzato
 *    404 -> non ho trovato la risorsa
 * 500 -> ho sminchiato qualcosa
 */

function checkServerStatus(serverStatus) {
  // cascata di if-else
  // if (serverStatus === 200 || serverStatus === 201 || serverStatus === 204) {
  //   console.log('Tutto ok')
  // } else if (serverStatus === 300) {
  //   console.log("Risorsa spostata")
  // } else if (serverStatus === 400 || serverStatus === 401 || serverStatus === 403 || serverStatus === 404) {
  //   console.log('Hai sminchiato qualcosa')
  // } else {
  //   console.log('Ho sminchiato qualcosa')
  // }

  // switch-case
  switch (serverStatus) {
    case 200:
    case 201:
    case 204:
      console.log('Tutto ok')
      break
    
    case 300:
      console.log("Risorsa spostata")
      break

    case 400:
    case 401:
    case 403:
    case 404:
      console.log('Hai sminchiato qualcosa')
      break

    default:
      console.log('Ho sminchiato qualcosa')
  }
}

checkServerStatus(200)
checkServerStatus(204)
checkServerStatus(403)
checkServerStatus(500)

// operatore ternario
// let result = someCondition ? doSomething() : doSomethingElse()
// let result = someCondition ? doSomething() : someOtherCondition ? doSomethingElse() : goHome()

let likesIcecream = true
let message = likesIcecream ? "Good for you!" : "What is your problem?"
console.log(message)
