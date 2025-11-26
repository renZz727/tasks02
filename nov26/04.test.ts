import { toTimeText } from "./04.qn.js";

interface Testcases {
  expected: string;
  input: number;
}
const testCases = [
  { expected: "2 Hour 30 Minutes", input: 9000 },
  { expected: "2 Hour 13 Minutes 20 seconds", input: 8000 },
  { expected: "3 Hour 5 Minutes 11 seconds", input: 11111 },
  { expected: "1 Minutes", input: 60 },
  { expected: "23 seconds", input: 23 },
  { expected: "2 Hour 1 Minutes 23 seconds", input: 7283 },
  { expected: "2 seconds", input: 2 },
  { expected: "20 Hour 21 Minutes 22 seconds", input: 73282 },
  { expected: "3 Hour 25 Minutes 48 seconds", input: 12348 },
  { expected: "1 Minutes 40 seconds", input: 100 },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = toTimeText(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
