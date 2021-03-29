// 1.	Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// function same(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     array1 = array1.map((value) => value ** 2);
//     array1 = array1.sort((a, b) => a - b);
//     array2 = array2.sort((a, b) => a - b);
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));

// 2.	Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values
// that sum to zero or undefined if a pair does not exist.
// function sumZero(array) {
//   let a = 0;
//   let b = array.length;
//   while (a < b) {
//     let sum = array[a] + array[b];
//     if (sum === 0) {
//       return [array[a], array[b]];
//     } else if (sum < 0) {
//       a++;
//     } else b--;
//   }
// }

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));
