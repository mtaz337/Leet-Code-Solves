/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const numbers = [];
   
   for(let i = 0; i<nums.length; i++){
     numbers[nums[i]] = i;
   }
   for(let i = 0; i<nums.length;i++){
       let n = target - nums[i];
       if(numbers[n]){
       if(numbers[n]!==i){
           let ans = [i,numbers[n]];
           return ans;
       }
   }
   }

};