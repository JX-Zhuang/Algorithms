/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var m = {};
    for(var i in nums){
        var item = nums[i];
        if(m.hasOwnProperty(item)){
            return [m[item],i];
        }else{
            m[target-item] = i;
        }
    }
    return [];
};