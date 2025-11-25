import { countVowels } from "./07.qn.js";
interface Testcases {
  expected: number;
  input: string;
}
const testCases: Testcases[] = [
  { expected: 3, input: "elephant" },
  { expected: 3, input: "Hello World!" },
  { expected: 4, input: "water melon" },
  { expected: 3, input: "orange" },
  { expected: 5, input: "areoplane" },
  { expected: 3, input: "elephant" },
  { expected: 11, input: "floxinoxinihiliphicaion" },
  { expected: 3, input: "potato" },
  { expected: 5, input: "aeiou" },
  { expected: 0, input: "pqrst" },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = countVowels(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
