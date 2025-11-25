import { armstrong } from "./03.qn.js";

interface Testcases {
    input: number;
    expected: boolean;
}
const testCases = [
  { expected: true, input: 153 },
  { expected: true, input: 370 },
  { expected: true, input: 371 },
  { expected: true, input: 407 },
  { expected: true, input: 1634 },
  { expected: false, input: 476 },
  { expected: false, input: 599 },
  { expected: false, input: 724 },
  { expected: false, input: 1024 },
  { expected: false, input: 1067 },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = armstrong(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
