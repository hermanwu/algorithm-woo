/**
 * @param {string} s
 * @return {number}
 */
let countSubstrings = function(s) {
    let ans = 0;
    let extendSearch = (s, left, right) => {
        while (left >= 0 &&
        right < s.length &&
        s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
            ans++;
        }
    }

    for (let i = 0, len = s.length; i < len; i++) {
        extendSearch(s, i, i);
        extendSearch(s, i, i + 1);
    }

    return ans;
};