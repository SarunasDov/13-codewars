/*
Gaunamas savaites krituliu kiekis milimetrais.
Jei visa savaite visiskai nelyjo, graziname: "Sausra";
Jei krituliu ne daugiau nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite"
Jei krituliu virs 1000mm, tai: "Barsukas turetu sedeti namie"
Visais kitais atvejais: "Labai daug lietaus"
*/

const a = [0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];

function lietus(list) {
    let kiekis = 0;
    for (let i = 0; i < list.length; i++) {
        kiekis += list[i];
    }

    if (kiekis === 0) {
        return  "Sausra";
    }
    if (kiekis <= 50) {
        return "Ganetinai sausas savaite";
    }
    if (kiekis <= 200) {
        return "Lietinga savaite";
    }
    if (kiekis > 1000) {
        return "Barsukas turetu sedeti namie";
    }
    return "Labai daug lietaus";
    
}


const xa = lietus(a);
const xb = lietus(b);
const xc = lietus(c);
const xd = lietus(d);
const xe = lietus(e);


console.log(xa);
console.log(xb);
console.log(xc);
console.log(xd);
console.log(xe);