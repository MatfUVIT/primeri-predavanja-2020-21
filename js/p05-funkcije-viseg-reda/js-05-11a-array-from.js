console.log("---");
let objekat = 'Miki Maus';
console.log(objekat);

let rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: 'aaa', 2: 42 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: 'aaa', 2: 42, length: 3 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: 'aaa', 2: 42, 4: false, length: 3 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: 'aaa', 2: 42, 4: false, length: 6 };
console.log(objekat);
rezultat = Array.from(objekat);
console.log(rezultat);