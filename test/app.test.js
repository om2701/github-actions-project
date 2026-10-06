const {add} = require("../src/app");

test("add two numbers", ()=>{
    expect(add(4,6)).toBe(10);
});