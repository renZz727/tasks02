import { removeFalsyValues } from "./06.qn.js";

interface Testcases {
  expected: unknown[];
  input: unknown[];
}
const testCases: Testcases[] = [
  { expected: [1, 2, 3, 4], input: [1, 0, 2, "", 3, null, 4] },
  { expected: [1, 2], input: [1, 0, 2, ""] },
  { expected: [1, 2], input: [1, 0, 2] },
  { expected: [3, 4], input: ["", 3, null, 4] },
  { expected: [23], input: [null, "", 23] },
  { expected: [], input: [0] },
  { expected: [1], input: [-0, 1] },
  { expected: [4, 2], input: [undefined, 4, 2] },
  { expected: [true, 782], input: [false, true, 782] },
  { expected: [67], input: [0n, 67] },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = removeFalsyValues(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
