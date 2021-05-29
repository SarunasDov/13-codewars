function tripleTrouble(one, two, three) {
    let letter = '';
    for (let i = 0; i < one.length; i++) {
        letter += one[i] + two[i] + three[i];
        console.log(one[i], two[i], three[i]);
        console.log(letter);
    }
    return letter;
}

test('test', () => {
    expect(tripleTrouble('this', 'test', 'lock')).toBe('ttlheoiscstk');
    expect(tripleTrouble('aa', 'bb', 'cc')).toBe('abcabc');
    expect(tripleTrouble('Bm', 'aa', 'tn')).toBe('Batman');
    expect(tripleTrouble('LLh', 'euo', 'xtr')).toBe('LexLuthor');
});