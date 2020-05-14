/**
 * @param {string} s
 * @return {number}
 * Runtime: 96 ms, faster than 60.79% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 39.9 MB, less than 74.33% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  let max = 0, curr = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const diff = i - map[c];
    curr = diff <= curr ? diff : curr + 1;
    max = Math.max(curr, max);
    map[c] = i;
  }
  return max;
};

module.exports = lengthOfLongestSubstring;
