const { additionner } = require('./index');

test('2 + 3 doit égaler 5', () => {
  expect(additionner(2, 3)).toBe(5);
});
