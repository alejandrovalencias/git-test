const { sum, divide, multiply } = require("../2-math");

test("Suma de 3 y 4 debe ser 7", () => {
  expect(sum(3, 4)).toBe(7);
});

test("La multiplicación should be 8", () => {
  expect(multiply(7, 4)).toBe(28);
});

test("La divición should be 8", () => {
  expect(divide(100, 10)).toBe(10);
  expect(divide(5, 5)).toBe(1);
  expect(divide(5, 0)).toBeNull();
});
