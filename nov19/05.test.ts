import { pathToKey } from "./05.qn.js";
interface Testcase {
  expected: string[] | string;
  input: Record<string, unknown>;
  key: string;
}
const testCases: Testcase[] = [
  { expected: ["a", "b", "c"], input: { a: { b: { c: 1 } } }, key: "c" },
  { expected: ["a"], input: { a: { b: { c: 1 } } }, key: "a" },
  { expected: ["a", "b"], input: { a: { b: { c: 1 } } }, key: "b" },
  { expected: ["a", "b", "d"], input: { a: { b: { d: 5 } } }, key: "d" },
  {
    expected: ["a", "e"],
    input: { a: { b: { c: 1 }, e: { f: 9 } } },
    key: "e",
  },
  {
    expected: ["a", "e", "f"],
    input: { a: { b: { c: 1 }, e: { f: 9 } } },
    key: "f",
  },
  {
    expected: ["a", "e", "g"],
    input: { a: { b: { c: 1 }, e: { f: 9, g: 10 } } },
    key: "g",
  },
  {
    expected: ["c"],
    input: { a: 1, b: 2, c: 3 },
    key: "c",
  },
  {
    expected: ["m", "i", "k"],
    input: { a: 1, b: 2, c: 3, m: { f: 10, g: 11, h: 13, i: { k: 1 } } },
    key: "k",
  },
  {
    expected: "not found",
    input: { a: 1, b: 2, c: 3, m: { f: 10, g: 11, h: 13, i: { k: 1 } } },
    key: "p",
  },
];

test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = pathToKey(testCase.input, testCase.key);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
