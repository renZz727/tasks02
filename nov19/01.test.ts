import { rotateMatrix } from "./01.qn.js";

interface Testcase {
  expected: number[][] | string[][] | string;
  input: number[][] | string[][];
}
const testCases: Testcase[] = [
  {
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
  },
  {
    expected: [
      [4, 1],
      [5, 2],
    ],
    input: [
      [1, 2],
      [4, 5],
    ],
  },
  {
    expected: [
      [4, 1],
      [7, 4],
      [3, 2],
    ],
    input: [
      [1, 4, 2],
      [4, 7, 3],
    ],
  },
  {
    expected: [[4, 1]],
    input: [[1], [4]],
  },
  {
    expected: [
      [2, 4, 1],
      [11, 1, 1],
      [2, 2, 9],
    ],
    input: [
      [1, 1, 9],
      [4, 1, 2],
      [2, 11, 2],
    ],
  },
  {
    expected: [
      [2, 4, 1],
      [11, 1, 1],
    ],
    input: [
      [1, 1],
      [4, 1],
      [2, 11],
    ],
  },
  {
    expected: [[2, 4, 1]],
    input: [[1], [4], [2]],
  },

  {
    expected: [
      [24, 12],
      [43, 23],
      [23, 18],
      [24, 19],
    ],
    input: [
      [12, 23, 18, 19],
      [24, 43, 23, 24],
    ],
  },
  {
    expected: [
      [24, 12, 24, 12],
      [43, 23, 43, 23],
      [23, 18, 23, 18],
      [24, 19, 24, 19],
    ],
    input: [
      [12, 23, 18, 19],
      [24, 43, 23, 24],
      [12, 23, 18, 19],
      [24, 43, 23, 24],
    ],
  },
  {
    expected: [
      ["e", "c", "a"],
      ["f", "d", "b"],
    ],
    input: [
      ["a", "b"],
      ["c", "d"],
      ["e", "f"],
    ],
  },
  {
    expected: "Input matrix is empty",
    input: [],
  },
];

test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = rotateMatrix(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
