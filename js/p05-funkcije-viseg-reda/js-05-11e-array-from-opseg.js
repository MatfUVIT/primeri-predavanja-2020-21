const opseg = (pocetak, kraj, korak) => Array.from({ length: (kraj - pocetak) / korak + 1 }, (_, i) => pocetak + (i * korak));

console.log("---");
let rezultat = opseg(1, 6, 1);
console.log(rezultat);

console.log("---");
rezultat = opseg(1, 10, 2);
console.log(rezultat);

console.log("---");
rezultat = opseg(1, 10, 0.5);
console.log(rezultat);

console.log("---");
rezultat = opseg(1, 10, 0.3);
console.log(rezultat);

console.log("---");
rezultat = opseg('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
console.log(rezultat);