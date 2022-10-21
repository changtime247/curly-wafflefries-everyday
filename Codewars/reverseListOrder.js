// 8 kyu
// Reverse List Order

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// ----------------------
// parameters: given an array of elements
// return that array but in reverse order
// examples
// reverseList([1,2,3,4]) --> [4,3,2,1]
// reverseList([3,1,5,4]) --> [4,5,1,3]
// pseudocode: use reverse on the array

function reverseList(list) {
    return list.reverse()
}