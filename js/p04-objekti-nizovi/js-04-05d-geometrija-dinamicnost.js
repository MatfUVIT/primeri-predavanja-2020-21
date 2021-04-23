const prikaziStrukturu = function(obj) {
    for (let deo in obj)
        console.log(`${deo} - ${obj[deo]}`);
};

let tacka1 = {
    x: 1.3,
    y: 2.8,
    pojaviSe: function() {
        console.log(`ja sam tacka (${this.x},${this.y})`);
    }
};


console.log('---');
tacka1.pojaviSe();
prikaziStrukturu(tacka1);


console.log('---');
tacka1.x = 7.42;
prikaziStrukturu(tacka1);

console.log('---');
tacka1.z = 0;
prikaziStrukturu(tacka1);

console.log('---');
delete tacka1.x;
prikaziStrukturu(tacka1);