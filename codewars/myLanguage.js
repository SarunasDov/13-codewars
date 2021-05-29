function myLanguages(results) {
    const lang = {}
    for (let key in results) {
        lang[results[key]] = key;
    }
    const newKeys = Object.keys(lang);
    const keysAsNumbers = newKeys.map(x => +x)
    const sortedKeys = keysAsNumbers.sort((a, b) => b - a);
    let newArry = [];
    for (let x of sortedKeys) {
        if (x >= 60) {
            newArry.push(lang[x])
        }
    }
    return newArry;
}



// Trumpas pavizdys

/*
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a, b) => results[b] - results[a]);
}
*/

