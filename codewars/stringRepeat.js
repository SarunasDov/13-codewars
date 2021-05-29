function repeatStr(n, s) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += s;
    }
    return str;
}





describe("Tests", function () {
    it("Basic tests", function () {
        Test.assertSimilar(repeatStr(3, "*"), "***");
        Test.assertSimilar(repeatStr(5, "#"), "#####");
        Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
    });
});



/*

Write a function called repeatStr
which repeats the given string string exactly n times.

*/