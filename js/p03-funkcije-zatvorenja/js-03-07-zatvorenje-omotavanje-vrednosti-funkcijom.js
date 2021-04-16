// primer zatvorenja
const omotajVrednost = function(n) {
    let lokalnaPromenljiva = n;
    return function() {
        return lokalnaPromenljiva;
    };
}

console.log("---");
let omotacZa1 = omotajVrednost(1);
console.log(omotacZa1);
console.log(omotacZa1());
console.log("---");
let omotacZa2 = omotajVrednost(2);
console.log(omotacZa2);
console.log(omotacZa2());

let omotacZa42 = omotajVrednost(42);
console.log(omotacZa42());