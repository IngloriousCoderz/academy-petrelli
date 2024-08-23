{
  let firstName = "Matteo";
  let lastName = "Mistretta";
  let age = 41;
}

let person = ["Matteo", "Mistretta", 41]
console.log(person[0], person[1], person[2], person[3]) // R
console.log(person.length, person[person.length - 1]) // R

person[0] = "Antony" // U
console.log(person) // R

/**
 * CRUD
 * 
 * C - Create
 * R - Retrieve/Read
 * U - Update
 * D - Delete
 */

person.push('Roma') // C - in fondo all'array
console.log(person) // R

person.unshift('Matteo') // C - in cima al'array
console.log(person)

person.pop() // D - dal fondo dell'array
console.log(person)

// push e pop fanno sì che l'array si comporti come uno stack
person.shift() // D - dalla cima dell'array
console.log(person)

person.splice(1, 1, 'Morato') // indice da cui fare le operazioni, numero di elementi da rimuovere, elementi da aggiungere
console.log(person)

console.log(person.slice(1, 2), person) // slice crea una fetta dell'array senza modificare l'originale, da un indice a un altro escluso

// destrutturazione

{
  const FIRST_ELEMENT = 0

  let firstName = person[FIRST_ELEMENT]
  let lastName = person[1]
  let age = person[person.length - 1]
  console.log(firstName, lastName, age)
}

let [firstName, lastName] = person // la destrutturazione mi consente di ricavare i primi N elementi
let age = person[person.length - 1] // purtroppo l'ultimo elemento non posso destrutturarlo, a meno che la dimensione non sia nota a priori
console.log(firstName, lastName, age)

let coordinates = [1, 2, 3]
let [x, y, z] = coordinates // qui l'array ha dimensione nota a priori, quindi riesco a destrutturare tutto

// spread operator

let numbers = [1, 2, 3, 4, 5]
let squares = [
  1,
  4,
  9,
  16,
  25
]

console.log([...numbers, 6])
console.log([...numbers, ...squares])

const [first, second, ...rest] = numbers
console.log(first, second, rest)
