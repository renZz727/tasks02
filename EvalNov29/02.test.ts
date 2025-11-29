import { findExpired } from "./02.qn.js";

type obj = { value: string; expiresAt: number };
interface Testcases {
  expected: obj[];
  input: obj[];
}
const testCases: Testcases[] = [
  {
    expected: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1764385872345 },
    ],
    input: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1864385872345 },
      { value: "data", expiresAt: 1764385872345 },
    ],
  },
  {
    expected: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
    ],
    input: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1864385872345 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
    ],
  },
  {
    expected: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
    ],
    input: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1864385872345 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1964385872345 },
    ],
  },
  {
    expected: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1164385872345 },
    ],
    input: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1864385872345 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1964385872345 },
      { value: "data", expiresAt: 1164385872345 },
    ],
  },
  {
    expected: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1164385872345 },
    ],
    input: [
      { value: "data", expiresAt: 1764385871929 },
      { value: "data", expiresAt: 1864385872345 },
      { value: "data", expiresAt: 1764385872345 },
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1964385872345 },
      { value: "data", expiresAt: 1164385872345 },
      { value: "data", expiresAt: 2064385872345 },
    ],
  },
  {
    expected: [
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1164385872345 },
    ],
    input: [
      { value: "data", expiresAt: 1664385872345 },
      { value: "data", expiresAt: 1964385872345 },
      { value: "data", expiresAt: 1164385872345 },
      { value: "data", expiresAt: 2064385872345 },
    ],
  },
  {
    expected: [],
    input: [
      { value: "data", expiresAt: 2164385872345 },
      { value: "data", expiresAt: 2064385872345 },
    ],
  },
  {
    expected: [{ value: "data", expiresAt: 1164385872345 }],
    input: [
      { value: "data", expiresAt: 2164385872345 },
      { value: "data", expiresAt: 2064385872345 },
      { value: "data", expiresAt: 1964385872345 },
      { value: "data", expiresAt: 1164385872345 },
    ],
  },
  {
    expected: [{ value: "data", expiresAt: 1164385872345 }],
    input: [
      { value: "data", expiresAt: 2164385872345 },
      { value: "data", expiresAt: 2064385872345 },
      { value: "data", expiresAt: 1964385872345 },
      { value: "data", expiresAt: 1164385872345 },
      { value: "data", expiresAt: 2164385872345 },
      { value: "data", expiresAt: 2064385872345 },
    ],
  },
  {
    expected: [],
    input: [],
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = findExpired(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`Testcase ${index + 1} passed`)
      : console.log(`Testcase ${index + 1} failed`);
  });
}
