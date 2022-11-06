const getPercent = require('./index');

test('Расчет процентов', () => {
  expect(getPercent(30, 200)).toBe(60);
});

test('Значение процентов менее 1', () => {
  expect(getPercent(-1, 200)).toBe(undefined);
});

test('Значение процентов более 100', () => {
  expect(getPercent(101, 200)).toBe(undefined);
});

test('Значение числа менее 1', () => {
  expect(getPercent(30, 0)).toBe(undefined);
});

test('Значение числа более 1000', () => {
  expect(getPercent(30, 1001)).toBe(undefined);
});

test('Неопределенное значение процентов', () => {
  expect(getPercent(undefined, 200)).toBe(NaN);
});

test('Неопределенное значение числа', () => {
  expect(getPercent(30, undefined)).toBe(NaN);
});

test('Бесконечный процент', () => {
  expect(getPercent(Infinity, 200)).toBe(undefined);
});

test('Бесконечное число', () => {
  expect(getPercent(30, Infinity)).toBe(undefined);
});





