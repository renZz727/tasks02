import { removeDuplicates } from "./01.qn.js";

interface Testcases {
  input: (number | string)[];
  expected: (number | string)[];
}
const testCases = [
  { expected: [1, 2, 3], input: [1, 2, 1, 2, 3, 1, 2] },
  { expected: [1, 2], input: [1, 2, 2] },
  { expected: [1, 4, 7, 9], input: [1, 4, 7, 7, 9] },
  { expected: [2, 4, 8, 9], input: [2, 4, 8, 9] },
  { expected: [726, 242, 12, 1], input: [726, 242, 12, 1, 726] },
  { expected: ["a", "b"], input: ["a", "b"] },
  { expected: ["a", "b", "d"], input: ["a", "b", "d", "b", "a"] },
  { expected: ["a", "b", 7, 6], input: ["a", "b", 7, 6] },
  { expected: [4, "a"], input: [4, "a", 4] },
  { expected: [], input: [] },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = removeDuplicates(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
