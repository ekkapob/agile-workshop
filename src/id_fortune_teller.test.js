import { luckyNumberFromID } from './id_fortune_teller';

describe('valid string id', () => {
  test('ID 999 to have lucky number of 9', () => {
    expect(luckyNumberFromID('999')).toBe(9);
  });

  test('ID 865 to have lucky number of 2', () => {
    expect(luckyNumberFromID('865')).toBe(10);
  });

  test('ID 001 to have lucky number of 1', () => {
    expect(luckyNumberFromID('001')).toBe(1);
  });

  test('ID 000 to have lucky number of 0', () => {
    expect(luckyNumberFromID('000')).toBe(0);
  });
});

describe('invalid string id', () => {
  test('ID with negative to have lucky number of -1', () => {
    expect(luckyNumberFromID('-1')).toBe(-1);
  });

  test('ID with float to have lucky number of -1', () => {
    expect(luckyNumberFromID('1.1')).toBe(-1);
  });

  test('Empty ID to have lucky number of -1', () => {
    expect(luckyNumberFromID('')).toBe(-1);
  });

  test('ID with characters to have lucky number of -1', () => {
    expect(luckyNumberFromID('ABC')).toBe(-1);
  });

  test('ID with undefined to have lucky number of -1', () => {
    expect(luckyNumberFromID()).toBe(-1);
  });

  test('ID with null to have lucky number of -1', () => {
    expect(luckyNumberFromID(undefined)).toBe(-1);
  });
});