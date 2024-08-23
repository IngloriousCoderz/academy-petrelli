console.log(1 == 1, 1 > 1, 1 < 1, 1 >= 1, 1 <= 1, 1 != 1)
console.log(1 == "1", 1 === "1", 1 === 1, 1 !== 2)

console.log(typeof 1, typeof "1", typeof true, typeof {}, typeof [], typeof null, typeof undefined)
console.log(typeof Infinity, typeof NaN)

let x
console.log(x == undefined, x == null, x === undefined, x !== null)
x = null
console.log(x == undefined, x == null, x !== undefined, x === null)

// in generale vogliamo usare sempre il ===, tranne quando verifichiamo che una variabile sia null o undefined
