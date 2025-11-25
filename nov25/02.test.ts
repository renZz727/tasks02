import { mostFrequentElement } from "./02.qn.js";

interface Testcases {
  expected: number | string;
  input: number[] | string[];
}
const testCases: Testcases[] = [
  { expected: 3, input: [1, 2, 2, 3, 3, 3, 4] },
  { expected: 2, input: [1, 2, 2, 3, 4] },
  { expected: 1, input: [1, 1, 1, 2, 2, 3, 3, 4] },
  { expected: 8, input: [3, 4, 8, 8] },
  { expected: 4, input: [3, 4, 8, 9, 4] },
  { expected: "b", input: ["a", "b", "c", "b"] },
  { expected: "no frequent elements", input: ["e", "f", "g"] },
  { expected: "h", input: ["k", "h", "j", "h"] },
  { expected: 8, input: [3, 4, 8, 8, "a", "b"] },
  { expected: "no frequent elements", input: [] },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = mostFrequentElement(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
