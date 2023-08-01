// matchers
test('Prueba con assertions', () => {
  const data = { name: 'sergio' };
  data.price = 100;
  expect(data).toEqual({ name: 'sergio', price: 100 });
});

test('validation to be null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('Bolooleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('String', () => {
  expect('alejandro').toMatch(/jan/);
});

test('List / arrays', () => {
  const number = [1, 2, 3, 4];
  expect(number).toContain(3);
});
