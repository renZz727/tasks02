import { mergeIds } from "./09.qn.js";

interface Testcases {
  expected: Record<string, unknown>[];
  input: Record<string, unknown>[];
}
const testCases: Testcases[] = [
  {
    expected: [
      { id: 1, value: 25 },
      { id: 2, value: 20 },
    ],
    input: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 1, value: 15 },
    ],
  },
  {
    expected: [
      { id: 1, value: 40 },
      { id: 2, value: 20 },
    ],
    input: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 1, value: 15 },
      { id: 1, value: 15 },
    ],
  },
  {
    expected: [{ id: 1, value: 25 }],
    input: [
      { id: 1, value: 10 },
      { id: 1, value: 15 },
    ],
  },
  {
    expected: [{ id: 1, value: 25 }],
    input: [
      { id: 1, value: 10 },
      { id: 1, value: 15 },
    ],
  },
  {
    expected: [
      { id: 1, value: 15 },
      { id: 3, value: 10 },
    ],
    input: [
      { id: 3, value: 10 },
      { id: 1, value: 15 },
    ],
  },
  {
    expected: [
      { id: 1, value: 10 },
      { id: 2, value: 15 },
      { id: 3, value: 34 },
    ],
    input: [
      { id: 1, value: 10 },
      { id: 2, value: 15 },
      { id: 3, value: 34 },
    ],
  },
  {
    expected: [
      { id: 1, value: 30 },
      { id: 2, value: 25 },
      { id: 3, value: 34 },
    ],
    input: [
      { id: 1, value: 10 },
      { id: 1, value: 20 },
      { id: 2, value: 10 },
      { id: 2, value: 15 },
      { id: 3, value: 34 },
    ],
  },
  {
    expected: [
      { id: 1, value: 30 },
      { id: 2, value: 25 },
      { id: 3, value: 73 },
    ],
    input: [
      { id: 1, value: 10 },
      { id: 1, value: 20 },
      { id: 2, value: 10 },
      { id: 2, value: 15 },
      { id: 3, value: 39 },
      { id: 3, value: 34 },
    ],
  },
  {
    expected: [
      { id: 1, value: 190 },
      { id: 2, value: 25 },
      { id: 3, value: 73 },
    ],
    input: [
      { id: 1, value: 10 },
      { id: 1, value: 20 },
      { id: 2, value: 10 },
      { id: 2, value: 15 },
      { id: 3, value: 39 },
      { id: 3, value: 34 },
      { id: 1, value: 90 },
      { id: 1, value: 70 },
    ],
  },
  {
    expected: [{ id: 1, value: 190 }],
    input: [{ id: 1, value: 190 }],
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = mergeIds(testCase.input);

    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
