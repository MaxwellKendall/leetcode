import { isAnagram } from './index';

describe('isAnagram', () => {
  const testCases = {
    'returns true for anagrams': {
      input: ['anagram', 'nagaram'],
      expected: true,
    },
    'returns false for non-anagrams': {
      input: ['rat', 'car'],
      expected: false,
    },
    'returns false for strings of different lengths': {
      input: ['a', 'ab'],
      expected: false,
    },
    'returns true for empty strings': { input: ['', ''], expected: true },
    'returns true for single character strings that are the same': {
      input: ['a', 'a'],
      expected: true,
    },
    'returns false for single character strings that are different': {
      input: ['a', 'b'],
      expected: false,
    },
  };

  for (const [description, { input, expected }] of Object.entries(testCases)) {
    it(description, () => {
      expect(isAnagram(...input)).toBe(expected);
    });
  }
});
