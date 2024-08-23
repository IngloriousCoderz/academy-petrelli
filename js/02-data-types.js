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

// JavaScript è dinamicamente tipizzato: il tipo delle variabili viene dedotto automaticamente
// JavaScript è debolmente tipizzato: il tipo delle variabili può cambiare in base all'operazione