import { analyzeHeatmap } from "./01.qn.js";
type Expected =
  | {
      maxTemp: number;
      minTemp: number;
      averageTemp: number;
      hottestPoint: number[];
      coldestPoint: number[][];
    }
  | string;
type Input = number[][];
interface Testcases {
  expected: Expected;
  input: Input;
}
const testCases = [
  {
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33.7,
      hottestPoint: [1, 1],
      coldestPoint: [1, 0],
    },
    input: [
      [30, 32, 35],
      [28, 40, 33],
      [31, 36, 38],
    ],
  },
  {
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33,
      hottestPoint: [1, 1],
      coldestPoint: [1, 0],
    },
    input: [
      [30, 32, 35],
      [28, 40, 33],
    ],
  },
  {
    expected: {
      maxTemp: 38,
      minTemp: 28,
      averageTemp: 32.6,
      hottestPoint: [2, 2],
      coldestPoint: [1, 0],
    },
    input: [
      [30, 32],
      [28, 33],
      [31, 36, 38],
    ],
  },
  {
    expected: {
      maxTemp: 38,
      minTemp: -1,
      averageTemp: 29.1,
      hottestPoint: [2, 2],
      coldestPoint: [1, 1],
    },
    input: [
      [30, 32, 35],
      [28, -1, 33],
      [31, 36, 38],
    ],
  },
  {
    expected: {
      maxTemp: 35,
      minTemp: 0,
      averageTemp: 27,
      hottestPoint: [0, 2],
      coldestPoint: [1, 1],
    },
    input: [[30, 32, 35], [28, 0, 33], [31]],
  },
  {
    expected: {
      maxTemp: 40,
      minTemp: 28,
      averageTemp: 33.7,
      hottestPoint: [0, 1],
      coldestPoint: [0, 0],
    },
    input: [[28, 40, 33]],
  },
  {
    expected: {
      maxTemp: 36,
      minTemp: -8,
      averageTemp: 21.2,
      hottestPoint: [2, 0],
      coldestPoint: [2, 1],
    },
    input: [
      [32, 35],
      [-1, 33],
      [36, -8],
    ],
  },
  {
    expected: {
      maxTemp: 36,
      minTemp: -8,
      averageTemp: 23.8,
      hottestPoint: [1, 0],
      coldestPoint: [1, 1],
    },
    input: [
      [32, 35],
      [36, -8],
    ],
  },
  {
    expected: {
      maxTemp: 35,
      minTemp: 32,
      averageTemp: 33.5,
      hottestPoint: [0, 1],
      coldestPoint: [0, 0],
    },
    input: [[32, 35]],
  },
  {
    expected: {
      maxTemp: 4,
      minTemp: 4,
      averageTemp: 4,
      hottestPoint: [0, 0],
      coldestPoint: [0, 0],
    },
    input: [[4]],
  },
  {
    expected: "empty heat map",
    input: [],
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = analyzeHeatmap(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`Testcase ${index + 1} passed`)
      : console.log(`Testcase ${index + 1} failed`);
  });
}
