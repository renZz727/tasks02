import { intersection } from "./04.qn.js";

interface Testcase {
  expected: number[];
  arr1: number[];
  arr2: number[];
}
const testCases: Testcase[] = [
  { expected: [2, 3], arr1: [1, 2, 3], arr2: [2, 3, 4] },
  { expected: [2, 3], arr1: [1, 2, 3], arr2: [2, 3] },
  { expected: [2], arr1: [1, 2, 3], arr2: [2, 4] },
  { expected: [3], arr1: [1, 2, 3], arr2: [3] },
  { expected: [], arr1: [1, 2, 3], arr2: [] },
  { expected: [3, 8], arr1: [3, 8], arr2: [2, 3, 7, 8] },
  { expected: [13, 23], arr1: [13, 23, 18], arr2: [10, 23, 13, 2] },
  { expected: [1], arr1: [1, 2, 3], arr2: [34, 21, 1] },
  { expected: [2, 3], arr1: [1, 2, 3], arr2: [10, 3, 2] },
  { expected: [], arr1: [], arr2: [] },
];

test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = intersection(testCase.arr1, testCase.arr2);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
