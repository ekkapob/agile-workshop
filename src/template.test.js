import { executeTemplate } from './template.js';

describe('Template has all fields', () => {
  test('has number, image, name, and info', () => {
    const content = executeTemplate('{{NUMBER}} {{IMG}} {{NAME}} {{INFO}}',
      '123', 'Img', 'John', 'Info');
    expect(count(content, '123')).toBe(1);
    expect(count(content, 'Img')).toBe(1);
    expect(count(content, 'John')).toBe(1);
    expect(count(content, 'Info')).toBe(1);
  });
});

describe('Template misses some fields', () => {
  test('2 numbers but no image, name and info', () => {
    const content = executeTemplate('{{NUMBER}} {{NUMBER}}',
      '123', 'Img', 'John', 'Info');
    expect(count(content, '123')).toBe(2);
    expect(count(content, 'Img')).toBe(0);
    expect(count(content, 'John')).toBe(0);
    expect(count(content, 'Info')).toBe(0);
  });
});

function count(source, search) {
  const matches = source.match(new RegExp(search, 'g'));
  return !matches ? 0 : matches.length;
}
