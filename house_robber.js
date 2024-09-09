// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


var rob = function(nums) {
    let n = nums.length
    let memo = new Array(n).fill(-1)
    const maxHaul = (x) =>{
        if(x < 0) return 0
        if(memo[x] === -1){
            memo[x] =  Math.max(nums[x] + maxHaul(x - 2), maxHaul(x - 1))
        }
        return memo[x]
    }
    
    return maxHaul(n - 1)
};