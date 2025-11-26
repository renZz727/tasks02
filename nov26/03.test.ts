import { toObjects } from "./03.qn.js";

interface Testcases {
  expected: Record<string, unknown>;
  input: Record<string, unknown>[];
}
const testCases: Testcases[] = [
  {
    expected: { a: 1, b: 2 },
    input: [
      { key: "a", value: 1 },
      { key: "b", value: 2 },
    ],
  },
  {
    expected: { a: 1, b: 2 },
    input: [
      { key: "a", value: 1 },
      { key: "b", value: 2 },
    ],
  },
  {
    expected: { a: 1, b: 2, c: 3 },
    input: [
      { key: "a", value: 1 },
      { key: "b", value: 2 },
      { key: "c", value: 3 },
    ],
  },
  {
    expected: { a: 1, c: 3, b: 2 },
    input: [
      { key: "a", value: 1 },
      { key: "c", value: 3 },
      { key: "b", value: 2 },
    ],
  },
  {
    expected: { a: 1, c: 4, e: 2, f: 3 },
    input: [
      { key: "a", value: 1 },
      { key: "c", value: 4 },
      { key: "e", value: 2 },
      { key: "f", value: 3 },
    ],
  },
  {
    expected: { name: "John", age: 32 },
    input: [
      { key: "name", value: "John" },
      { key: "age", value: 32 },
    ],
  },
  {
    expected: { name: "John", age: 32, email: "r@76" },
    input: [
      { key: "name", value: "John" },
      { key: "age", value: 32 },
      { key: "email", value: "r@76" },
    ],
  },
  {
    expected: { name: "John", age: 32, email: "r@76", mob: "80867" },
    input: [
      { key: "name", value: "John" },
      { key: "age", value: 32 },
      { key: "email", value: "r@76" },
      { key: "mob", value: "80867" },
    ],
  },
  {
    expected: { name: "John" },
    input: [{ key: "name", value: "John" }],
  },
  {
    expected: {},
    input: [],
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = toObjects(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
