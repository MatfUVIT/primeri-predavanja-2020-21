"use strict";

let slucajanBrojIliMiki = function() {
    const slucajan = Math.random();
    if (slucajan < 0.4)
        return Math.floor(slucajan * 10);
    if (slucajan < 0.8)
        return Math.floor(-slucajan * 10);
    return "Miki Maus";
};

function kvadratniKoren(izvorPodataka) {
    let broj = Number(izvorPodataka());
    if (isNaN(broj)) {
        const err = new Error("nemoguce korenovati nesto sto nije broj")
        throw err;
    }
    if (broj < 0) {
        const err = new Error("nemoguce korenovati nesto sto nije broj")
        throw err;
    }
    let rezultat = Math.sqrt(broj);
    return { "broj": broj, "rezultat": rezultat };
}

for (let i = 0; i < 10; i++)
    console.log(kvadratniKoren(slucajanBrojIliMiki));