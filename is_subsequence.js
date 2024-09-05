// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) 
// of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if 
// t has its subsequence. In this scenario, how would you change your code?

function preprocessT(t) {
    const indexMap = new Map();
    for (let i = 0; i < t.length; i++) {
        if (!indexMap.has(t[i])) {
            indexMap.set(t[i], []);
        }
        indexMap.get(t[i]).push(i);
    }
    return indexMap;
}

function isSubsequence(si, indexMap) {
    let currentPosition = -1; 
    for (const char of si) {
        if (!indexMap.has(char)) {
            return false; 
        }
        const indices = indexMap.get(char);
        const pos = binarySearch(indices, currentPosition);
        if (pos === indices.length) {
            return false; 
        }
        currentPosition = indices[pos];
    }
    return true;
}

function binarySearch(array, target) {
    let left = 0, right = array.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
