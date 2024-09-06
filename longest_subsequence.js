// You are given a string array words, and an array groups, both arrays having length n.
// The hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different.
// You need to select the longest 
// subsequence
//  from an array of indices [0, 1, ..., n - 1], such that for the subsequence denoted as [i0, i1, ..., ik-1] having length k, the following holds:
// For adjacent indices in the subsequence, their corresponding groups are unequal, i.e., groups[ij] != groups[ij+1], for each j where 0 < j + 1 < k.
// words[ij] and words[ij+1] are equal in length, and the hamming distance between them is 1, where 0 < j + 1 < k, for all indices in the subsequence.
// Return a string array containing the words corresponding to the indices (in order) in the selected subsequence. If there are multiple answers, return any of them.

// Note: strings in words may be unequal in length

var getWordsInLongestSubsequence = function(words, groups) {
    const n = words.length;
    const dp = Array(n).fill(0).map(() => ({ length: 1, prev: -1 }));
    
    const hammingDistance = (str1, str2) => {
        if (str1.length !== str2.length) return -1;
        let hammingDist = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) hammingDist++;
        }
        return hammingDist;
    };

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (groups[i] !== groups[j] && hammingDistance(words[i], words[j]) === 1) {
                if (dp[j].length + 1 > dp[i].length) {
                    dp[i].length = dp[j].length + 1;
                    dp[i].prev = j;
                }
            }
        }
    }

    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        if (dp[i].length > dp[maxIndex].length) {
            maxIndex = i;
        }
    }

    const result = [];
    let currentIndex = maxIndex;
    while (currentIndex !== -1) {
        result.push(words[currentIndex]);
        currentIndex = dp[currentIndex].prev;
    }

    return result.reverse();
};
