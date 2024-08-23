/* numbers */
1
2
10
1000000
1_000_000
0.1
0.01
// + - * / **

/* booleans */
true
false
let a = true;
let b = false;
console.log(a, !a);
console.log(b, !b);

console.log(a, b, a && b);
console.log(a, b, a || b);

/* strings */
'Hello \'world\'!';
"Hello 'world'!";
"Hello \"world\"!";
'Hello "world"!';
`Hello 'world', how are "you"? I'm \`fine\``; // template literal
`Posso
andare
a
capo`; // multiline
let name = 'Matteo';
console.log("Ciao, mi chiamo " + name + "!"); // concatenazione di stringhe
console.log(`Ciao, mi chiamo ${name.toUpperCase()}!`); // interpolare espressioni js

/* arrays */
let firstName = "Matteo";
let lastName = "Mistretta";
let age = 41;
let person = ["Matteo", "Mistretta", 41]
console.log(person[0], person[1], person[2], person[3])
console.log(person.length, person[person.length - 1])
