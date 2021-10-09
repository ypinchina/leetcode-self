// 977. 有序数组的平方
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 示例 1：

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

// 链接：https://leetcode-cn.com/problems/squares-of-a-sorted-array

// 1. 暴力破解
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  var arr = []
  for (var i = 0; i<nums.length;i++) {
      arr[i] = nums[i]*nums[i]
  }
  arr.sort(function(a, b) {
      return a-b
  })
  return arr
  // return nums.map(item => item * item).sort((a, b) => {return a-b}) 一句话解决
};
// 2.传统不适用js自带的api
