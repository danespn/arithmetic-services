const { add, div, mult } = require("../arithmetica")

test('2 + 3 is equal to 5', () =>{
    expect(add(2,3)).toBe(5);
})


test('222 + 333 is equal to 555', () =>{
    expect(add(222,333)).toBe(555);
})


test('99 / 1 is equal to 100', () =>{
    expect(div(99,1)).toBe(99);
})

test('99 * 1 is equal to 100', () =>{
    expect(mult(99,1)).toBe(99);
})