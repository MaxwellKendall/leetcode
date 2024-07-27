import { containsDuplicate } from './index';

describe('containsDuplicate', () => {
  const testCases = {
    'returns true for array with duplicates': {
      input: [1, 2, 3, 1],
      expected: true,
    },
    'returns false for array without duplicates': {
      input: [1, 2, 3, 4],
      expected: false,
    },
    'returns false for empty array': { input: [], expected: false },
    'returns false for array with one element': { input: [1], expected: false },
  };

  for (const [description, { input, expected }] of Object.entries(testCases)) {
    it(description, () => {
      expect(containsDuplicate(input)).toBe(expected);
    });
  }
});
