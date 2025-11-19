import { numberSeperator } from "./03.qn.js";
interface TestCase {
  expected: string;
  input: number;
}
const testCases: TestCase[] = [
  { expected: "12,34,567", input: 1234567 },
  { expected: "1", input: 1 },
  { expected: "10", input: 10 },
  { expected: "101", input: 101 },
  { expected: "1,204", input: 1204 },
  { expected: "10,123", input: 10123 },
  { expected: "1,04,422", input: 104422 },
  { expected: "19,23,411", input: 1923411 },
  { expected: "1,02,34,241", input: 10234241 },
  { expected: "24,23,42,568", input: 242342568 },
  { expected: "7,62,38,29,341", input: 7623829341 },
  { expected: "1,34,11,23,42,32,34,234", input: 1341123423234234 },
];

test(testCases);

function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = numberSeperator(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
