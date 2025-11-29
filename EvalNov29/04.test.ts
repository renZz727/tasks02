import { templateParser } from "./04.qn.js";

interface Testcases {
  expected: string;
  input1: string;
  input2: Record<string, unknown>;
}
const testCases: Testcases[] = [
  {
    expected: "Hello John, you have 3 new messages.",
    input1: "Hello {{name}}, you have {{count}} new messages.",
    input2: { name: "John", count: 3 },
  },
  {
    expected: "Hello Jacob, you have 1 new messages.",
    input1: "Hello {{name}}, you have {{count}} new messages.",
    input2: { name: "Jacob", count: 1 },
  },
  {
    expected: "Hello Jonas",
    input1: "Hello {{name}}",
    input2: { name: "Jonas" },
  },
  {
    expected: "Hello Jacob, you have 1 new messages.",
    input1: "Hello {{name}}, you have {{count}} new messages.",
    input2: { name: "Jacob", count: 1 },
  },
  {
    expected: "Hello Jonas, age 24",
    input1: "Hello {{name}}, age {{age}}",
    input2: { name: "Jonas", age: 24 },
  },
  {
    expected: "key name, value Ram",
    input1: "key {{key}}, value {{value}}",
    input2: { key: "name", value: "Ram" },
  },
  {
    expected: "employee: name, isActive: yes",
    input1: "employee: {{employee}}, isActive: {{isActive}}",
    input2: { employee: "name", isActive: "yes" },
  },
  {
    expected: "employee: George, isActive: no",
    input1: "employee: {{employee}}, isActive: {{isActive}}",
    input2: { employee: "George", isActive: "no" },
  },
  {
    expected: "employee: Tim, isActive: no, isAvail no",
    input1:
      "employee: {{employee}}, isActive: {{isActive}}, isAvail {{isAvail}}",
    input2: { employee: "Tim", isActive: "no", isAvail: "no" },
  },
  {
    expected: "employee: Tim, isActive: no, isAvail yes",
    input1:
      "employee: {{employee}}, isActive: {{isActive}}, isAvail {{isAvail}}",
    input2: { employee: "Tim", isActive: "no", isAvail: "yes" },
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = templateParser(testCase.input1, testCase.input2);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    isSame
      ? console.log(`Testcase ${index + 1} passed`)
      : console.log(`Testcase ${index + 1} failed`);
  });
}
