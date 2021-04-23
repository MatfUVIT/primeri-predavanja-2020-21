let list1 = {
    vrednost: 1,
    ostali: {
        vrednost: 2,
        ostali: {
            vrednost: 3,
            ostali: null
        }
    }
};

let list2 = {
    vrednost: 42,
    ostali: {
        vrednost: 1,
        ostali: {
            vrednost: 2,
            ostali: {
                vrednost: 3,
                ostali: null
            }
        }
    }
};


let list3 = {
    vrednost: 4242,
    ostali: list2
};

const prikaziListuRek = function(l) {
    if (l === null)
        return;
    if (!("vrednost" in l))
        return;
    console.log(l.vrednost + " ");
    if ("ostali" in l)
        prikaziListuRek(l.ostali);
};

prikaziListuRek(list1);
console.log("---");
prikaziListuRek(list2);
console.log("---");
prikaziListuRek(list3);