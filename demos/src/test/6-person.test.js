const Person = require("../6-person");

describe('Test for person', () => {
  let person;
  beforeAll(() => {
    person = new Person('Alejo', 40, 1.71);
  });
  test('should return down', () => {
    person.weight = 45;
    expect(person.calcIMC()).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    expect(person.calcIMC()).toBe('normal');
  });
});
