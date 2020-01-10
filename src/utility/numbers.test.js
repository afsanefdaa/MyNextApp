const { splitComma } = require('./numbers');

test('85638456784 to 85,638,456,784', () => {
  expect(splitComma(85638456784)).toBe('85,638,456,784');
});
