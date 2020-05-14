const lengthOfLongestSubstring = require('./longest-substring-without-repeating-characters');

describe('longest-substring-without-repeating-characters', () => {
    it('passes "abcabcbb"', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toStrictEqual(3);
    });
    it('passes "bbbbb"', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toStrictEqual(1);
    });
    it('passes "pwwkew"', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toStrictEqual(3);
    });
    it('passes "babcdeda"', () => {
        expect(lengthOfLongestSubstring("babcdeda")).toStrictEqual(5);
    });
})