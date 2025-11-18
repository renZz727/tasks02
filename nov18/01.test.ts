import { formatter } from "./01.qn.js";
interface TestCase {
  expected: string;
  date: Date;
  format: string;
}
const testCases: TestCase[] = [
  {
    expected: "25-2-4, 13:44:3",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-D, H:m:s",
  },
  {
    expected: "25-2-4, 13:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-D, H:m:ss",
  },
  {
    expected: "25-2-4, 1:44:3",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-D, h:mm:s",
  },
  {
    expected: "25-2-4, 01:44:3",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-D, hh:mm:s",
  },
  {
    expected: "25-2-4, 01:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-D, hh:mm:ss",
  },
  {
    expected: "25-2-4, 13:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-D, HH:mm:ss",
  },

  {
    expected: "25-2-04, 13:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YY-M-DD, HH:mm:ss",
  },
  {
    expected: "2025-02-04, 13:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "YYYY-MM-DD, HH:mm:ss",
  },
  {
    expected: "04-02-2025, 13:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "DD-MM-YYYY, HH:mm:ss",
  },
  {
    expected: "04/02/2025, 13:44:03",
    date: new Date(2025, 1, 4, 13, 44, 3),
    format: "DD/MM/YYYY, HH:mm:ss",
  },
];

test(testCases);

function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = formatter(testCase.date, testCase.format);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
