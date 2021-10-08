// 第一天第一道题   二分查找基础
// https://leetcode-cn.com/problems/binary-search/ 
// 704 二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) {
    return -1
  } else {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
      let half = Math.floor((low + high)/2)
      if (nums[half] === target) {
        return half
      } else if (nums[half] > target) {
        high = half - 1 
      } else {
        low = half + 1
      }
    }
    return -1
  }
};