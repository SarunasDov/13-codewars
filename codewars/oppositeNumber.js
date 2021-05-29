function differenceInAges(ages) {

    let youngest = Infinity;
    let oldest = -Infinity;

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < youngest) {
            youngest = ages[i];
        }
        if (ages[i] > oldest) {
            oldest = ages[i];

        }
    }
    return youngest, oldest, oldest - youngest;
}


Oldest Youngest uzdavinys