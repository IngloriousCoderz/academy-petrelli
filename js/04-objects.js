let person = { firstName: 'Matteo', 'last-name': 'Mistretta', age: 41 }
console.log(person['firstName'], person['last-name'], person['age']) // array associativi: square bracket notation
console.log(person.firstName, person['last-name'], person.age) // dot notation

let key = 'firstName' // simuliamo che abbiamo chiesto all'utente quale proprietà vuole
console.log(person[key]) // la square bracket notation è utile anche quando il nome della proprietà non è noto a priori

person.firstName = 'Antony' // U
console.log(person)

person.birthCity = 'Roma' // C
console.log(person)

delete person['last-name'] // D
console.log(person)

// destrutturazione

let { birthCity: city, firstName: firstName, age } = person // posso dare un nome diverso alla variabile, altrimenti posso anche ometterlo
console.log(city, firstName, age)

// spread operator

console.log({ ...person, lastName: 'Mistretta' })

let anotherPerson = { firstName: 'Matteo Antony', instrument: 'Bass' }
console.log({ ...person, ...anotherPerson })

let { birthCity, ...rest } = person
console.log(birthCity, rest)
