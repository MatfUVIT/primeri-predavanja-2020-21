console.log("---");
let objekat = 'Miki Maus';
console.log(objekat);
let rezultat = Array.from(objekat, x => x + x);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: 'AA', 2: 42, length: 3 };
console.log(objekat);
rezultat = Array.from(objekat, x => x + x);
console.log(rezultat);