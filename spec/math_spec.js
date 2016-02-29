// tell the test where to find the code
var math = require('../math');

describe("A simple program that does arithmetic", function() {
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
  });
   it("can subtract two numbers", function() {
    expect(math.subtract(5,3)).toBe(2);
  });
   it("can multiply two numbers", function() {
    expect(math.multiply(5,3)).toBe(15);
  });
   it("can divide two numbers", function() {
    expect(math.divide(6,3)).toBe(2);
  });


});