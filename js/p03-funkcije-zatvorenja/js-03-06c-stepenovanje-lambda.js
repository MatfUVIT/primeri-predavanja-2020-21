const stepen = (osnova=10, izlozilac = 2) => {
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen(1.25));
console.log(stepen());