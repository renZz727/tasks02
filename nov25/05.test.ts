import { intersection } from "./05.qn.js";

interface Testcases {
    expected: unknown[];
    arr1: unknown[];
    arr2: unknown[];
}
const testCases = [
    {expected: [2, 3], arr1: [1, 2, 3], arr2: [2, 3, 4]},
    {expected: [2, 3, 5], arr1: [1, 2, 3, 5], arr2: [2, 3, 4, 5]},
    {expected: [1, 2, 3], arr1: [1, 2, 3, 5], arr2: [2, 3, 1]},
    {expected: [1, 2, 3, 'a'], arr1: [1, 2, 3, 5, 'a'], arr2: [2, 3, 1, 'a',]},
    {expected: [2], arr1: [1, 2], arr2: [2]},
    {expected: [2], arr1: [2], arr2: [2]},
    {expected: [], arr1: [1, 2, 3, 5], arr2: []},
    {expected: ['b'], arr1: ['b'], arr2: ['a', 'b']},
    {expected: ['n'], arr1: ['n'], arr2: ['m', 'n']},
    {expected: [], arr1: [1, 2, 3, 5], arr2: ['k']},
]

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = intersection(testCase.arr1, testCase.arr2);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
