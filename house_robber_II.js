// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


var rob = function(nums) {
    let n = nums.length;
    
    if (n === 1) return nums[0];
    
    const robLinear = (houses) => {
        let prev1 = 0, prev2 = 0;
        
        for (let num of houses) {
            let temp = prev1;
            prev1 = Math.max(prev1, prev2 + num);
            prev2 = temp;
        }
        
        return prev1;
    }
  
    return Math.max(robLinear(nums.slice(0, n - 1)), robLinear(nums.slice(1, n)));
};
