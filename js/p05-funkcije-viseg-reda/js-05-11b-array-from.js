let objekat = 'Miki Maus';
console.log(objekat);

let rezultat = Array.from(objekat, x => x + x);
console.log(rezultat);

objekat = { broj: 12, ukupno: 42 };
rezultat = Array.from(objekat, x => x + x);
console.log(rezultat);