import { rotateArray } from "./02.qn.js";

interface Testcases {
  expected: number[]| string[];
  arr: number[] | string[];
  k: number;
}
const testCases = [
  { expected: [5, 1, 2, 3, 4], arr: [1, 2, 3, 4, 5], k: 1 },
  { expected: [4, 5, 1, 2, 3], arr: [1, 2, 3, 4, 5], k: 2 },
  { expected: [3, 4, 5, 1, 2], arr: [1, 2, 3, 4, 5], k: 3 },
  { expected: [2, 3, 4, 5, 1], arr: [1, 2, 3, 4, 5], k: 4 },
  { expected: [1, 2, 3, 4, 5], arr: [1, 2, 3, 4, 5], k: 5 },
  { expected: [1, 2, 3, 4, 5], arr: [1, 2, 3, 4, 5], k: 0 },
  { expected: [ 'd', 'a', 'b', 'c' ], arr: ['a', 'b', 'c', 'd'], k: 5 },
  { expected: [ 'a', 'b', 'c', 'd' ], arr: ['a', 'b', 'c', 'd'], k: 4 },
  { expected: [ 'a', 'b', 'c', 'd' ], arr: ['a', 'b', 'c', 'd'], k: 0 },
  { expected: [ 'a' ], arr: ['a'], k: 1 },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = rotateArray(testCase.arr, testCase.k);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
