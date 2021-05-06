let tackaA = {
    x: 1.3,
    y: 2.8,
    pojaviSe: function(oznaka = '') {
        console.log(`ja sam tacka ${oznaka}(${this.x},${this.y})`);
    }
};

console.log('---');
tackaA.pojaviSe();
tackaA.pojaviSe('A');

let tackaB = {
    x: -1.3,
    y: -42.0
};

console.log('---');
tackaA.pojaviSe.call(tackaB, 'B');
tackaA.pojaviSe.apply(tackaB, ['B']);
tackaA.pojaviSe.bind(tackaB)('B');