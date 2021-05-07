console.log("---");
let objekat = 'Miki Maus';
console.log(objekat);
let rezultat = Array.from(objekat, (x, i) => x + i);
console.log(rezultat);

console.log("---");
objekat = { 0: 11, 1: false, 2: 42, length: 3 };
console.log(objekat);
rezultat = Array.from(objekat, (e, i) => " [" + i + "]:" + e);
console.log(rezultat);