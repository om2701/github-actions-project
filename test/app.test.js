const {add} = require("../src/app");
const {sub} = require("../src/app");


test("add two numbers", ()=>{
    expect(add(4,6)).toBe(10);
});

test("Subtract two numbers", ()=>{
    expect(sub(10,5)).toBe(5);
});