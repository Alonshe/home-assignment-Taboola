const { config } = require('./config');

// English
test('Should be english', () => {
  expect(config.checkLanguage('random word')).toBe('english');
});
// Hebrew
test('Should be hebrew', () => {
  expect(config.checkLanguage('עברית')).toBe('hebrew');
});

