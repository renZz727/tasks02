import { sumOfUniqueNumbers } from "./05.qn.js";

interface Testcases {
  expected: number;
  input: number[];
}
const testCases = [
  { expected: 4, input: [1, 2, 3, 2] },
  { expected: 6, input: [1, 2, 3] },
  { expected: 3, input: [1, 2, 3, 3] },
  { expected: 2, input: [1, 1, 2] },
  { expected: 5, input: [-2, 3, 4] },
  { expected: 2, input: [-2, 3, 3, 4] },
  { expected: -2, input: [-2, 3, 3, 4, 4] },
  { expected: 0, input: [1, 2, 2, 1] },
  { expected: 7, input: [1, 2, 3, 3, 2, 1, 7] },
  { expected: -9, input: [-11, 2, 3, 3] },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = sumOfUniqueNumbers(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
