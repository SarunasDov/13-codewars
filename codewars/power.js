function numberToPower(number, power) {

    let x = 1;
    if (power === 0) {
        return 1;
    }

    for (let i = 1; i < power.length; i++) {
        x *= number;
    }
    return x;
}