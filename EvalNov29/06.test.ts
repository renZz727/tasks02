import { compression } from "./06.qn.js";
interface Testcase {
  expected: string;
  input: string;
  type: string;
}
const testCases: Testcase[] = [
  { expected: "a3b4c2", input: "aaabbbbcc", type: "encrypt" },
  { expected: "a2b2c1", input: "aabbc", type: "encrypt" },
  { expected: "b2a1c1d1e1", input: "bbacde", type: "encrypt" },
  { expected: "a1b1c1d1e1", input: "abcde", type: "encrypt" },
  { expected: "a2b2c1", input: "aabbc", type: "encrypt" },
  { expected: "a2b2c1", input: "aabbc", type: "encrypt" },
  { expected: "abcde", input: "a1b1c1d1e1", type: "decrypt" },
  { expected: "bbacde", input: "b2a1c1d1e1", type: "decrypt" },
  { expected: "aabbc", input: "a2b2c1", type: "decrypt" },
  { expected: "aaabbbbcc", input: "a3b4c2", type: "decrypt" },
];

test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = compression(testCase.input, testCase.type);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    isSame
      ? console.log(`Testcase ${index + 1} passed`)
      : console.log(`Testcase ${index + 1} failed`);
  });
}
