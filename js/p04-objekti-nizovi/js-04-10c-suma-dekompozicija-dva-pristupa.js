// monolitan pristup
console.log('---');
let total = 0;
let current = 1;
while (current <= 10) {
    total += current;
    current++;
}

// funkcionalan pristup
console.log('---');
const saberi = function(start, end) {
    let total = 0;
    let current = start;
    while (current <= end) {
        total += current;
        current++;
    }
    return total;
}
let total2 = saberi(1, 10);
console.log(total2);
// prikazuje 55

console.log('---');

// funkcionalna dekompozicija problema
function opseg(start, end) {
    let niz = [];
    for (let i = start; i <= end; i++)
        niz.push(i);
    return niz;
}

function suma(niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++)
        suma += niz[i];
    return suma;
}
let total3 = suma(opseg(1, 10));
console.log(total3);
// prikazuje 55


// Ovo nije dobro!
//console.log(suma(opseg(10, 1)));