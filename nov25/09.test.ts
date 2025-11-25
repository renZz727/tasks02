import { isSorted } from "./09.qn.js";
interface Testcase {
  expected: string;
  input: number[];
}
const testCases = [
  { expected: "ascending", input: [1, 2, 3, 4, 5, 6] },
  { expected: "descending", input: [6, 5, 4, 3, 2, 1] },
  { expected: "unsorted", input: [6, 5, 4, 1, 3, 4] },
  { expected: "ascending", input: [-2, 0, 7, 10] },
  { expected: "unsorted", input: [-100, 100, 80, -60] },
  { expected: "ascending", input: [21, 40, 67, 92] },
  { expected: "unsorted", input: [-17, 16, 42, 11, 22] },
  { expected: "descending", input: [23, 22, 21, 20] },
  { expected: "ascending", input: [-97, -96, -94] },
  { expected: "unsorted", input: [-97, -96, -100, -94] },
];
test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = isSorted(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
