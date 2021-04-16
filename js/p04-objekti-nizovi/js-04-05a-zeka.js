let zec = {};
zec.ime = "Душко Дугоушко";
zec.kaze = function(tekst) {
    console.log("Зека каже: '" + tekst + "'");
};

console.log(zec.ime);

zec.kaze("Који ти је враг, шефе?");

let x = zec.ime;
zec.ime = zec.kaze;
zec.kaze = x;
zec.ime("Проба! 1,2,3...");
console.log(zec.kaze);