/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function (s, t) {
  const map = {};
  const mapT = {};
  if (s.length !== t.length) return false;
  for (var i = 0; i < s.length; i++) {
    const letter = s[i];
    map[letter] = map[letter] ? map[letter] + 1 : 1;
  }
  for (var i = 0; i < t.length; i++) {
    const letter = t[i];
    mapT[letter] = mapT[letter] ? mapT[letter] + 1 : 1;
  }
  const letters = Object.keys(map);
  for (var i = 0; i < letters.length; i++) {
    const occurences = map[i];
    const letter = letters[i];
    const isBad = map[letter] !== mapT[letter];
    if (isBad) {
      return false;
    }
  }
  return true;
};