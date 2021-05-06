let tackaA = {
    x: 1.3,
    y: 2.8,
    pojaviSe: function() {
        console.log(`ja sam tacka (${this.x},${this.y})`);
    }
};

console.log('---');
tackaA.pojaviSe();

let tackaB = {
    x: -1.3,
    y: -42.0
};

console.log('---');
tackaA.pojaviSe.call(tackaB);

console.log('---');
tackaA.pojaviSe.apply(tackaB);

console.log('---');
const uvezanaFja = tackaA.pojaviSe.bind(tackaB);
uvezanaFja();


let zika = {
    ime: 'Жика',
    prezime: 'Митровић',
    pozicija: {
        x: '42 23 E',
        y: '10 12 N',
        z: '100'
    }
};

console.log('---');
tackaA.pojaviSe.call(zika.pozicija);
tackaA.pojaviSe.apply(zika.pozicija);
tackaA.pojaviSe.bind(zika.pozicija)();