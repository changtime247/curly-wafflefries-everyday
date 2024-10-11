/*
1331. Rank Transform of an Array
Easy

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.

Example 1:
Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

Example 2:
Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Example 3:
Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]

Constraints:
0 <= arr.length <= 105
-109 <= arr[i] <= 109
*/

/*
Given an array of numbers. There can be duplicates.
Return an array of ranks. If two elements are equal, their rank must be the same.
Example:
arrayRankTransform([-1000000000,-1000000000,-1000000000,1000000000,1000000000,1000000000]), [0,0,0,-1]
Steps:
1. Get a sorted list of unique values
2. Create a map to store the rank of each value
3. Map the original array to their ranks
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  if (arr.length === 0) return []
  const sortedUniqueArr = [...new Set(arr)].sort((a, b) => a - b)
  const rankMap = {}
  sortedUniqueArr.forEach((value, index) => {
    rankMap[value] = index + 1
  })
  return arr.map((value) => rankMap[value])
}