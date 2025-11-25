import { deepEqual } from "./10.qn.js";
interface Testcase {
  expected: boolean;
  arr1: Record<string, unknown> | (number | number[])[] | (string | string[])[];
  arr2: Record<string, unknown> | (number | number[])[] | (string | string[])[];
}
const testCases: Testcase[] = [
  { expected: true, arr1: { a: 1, b: { c: 2 } }, arr2: { a: 1, b: { c: 2 } } },
  { expected: false, arr1: { a: 1, b: { c: 4 } }, arr2: { a: 1, b: { c: 2 } } },
  { expected: false, arr1: [1, [2]], arr2: [1, [2, 3]] },
  { expected: true, arr1: [1, [2]], arr2: [1, [2]] },
  { expected: true, arr1: { a: 1 }, arr2: { a: 1 } },
  {
    expected: false,
    arr1: { a: 1, b: { c: 4, d: { k: 4 } } },
    arr2: { a: 1, b: { c: 2 } },
  },
  { expected: false, arr1: { a: 2, b: { c: 4 } }, arr2: { a: 1, b: { c: 2 } } },
  { expected: false, arr1: [1, [2, 4, 9]], arr2: [1, [2, 90]] },
  { expected: false, arr1: [1, 2, 3, 4], arr2: [1, [2, 3, 4]] },
  { expected: true, arr1: [1, [2, 3, 4]], arr2: [1, [2, 3, 4]] },
];

test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = deepEqual(testCase.arr1, testCase.arr2);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
