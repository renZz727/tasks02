import { queryParams } from "./07.qn.js";

interface Testcases {
  expected: Record<string, unknown>;
  input: string;
}
const testCases: Testcases[] = [
  {
    expected: { name: "John", age: "20", active: "true" },
    input: "?name=John&age=20&active=true",
  },
  {
    expected: { name: "John", age: "20", active: "true" },
    input: "name=John&age=20&active=true",
  },
  {
    expected: { name: "John", active: "true" },
    input: "?name=John&active=true",
  },
  {
    expected: { name: "John", active: "false" },
    input: "?name=John&active=false",
  },
  {
    expected: { name: "John", active: "false", email: "user@" },
    input: "?name=John&active=false&email=user@",
  },
  {
    expected: { name: "John", active: "false", email: "user@" },
    input: "?name=John&active=false?&email=user@",
  },
  {
    expected: { name: "John", active: "false", email: "user@" },
    input: "?name=John&active=?false&email=user@",
  },
  {
    expected: { active: "false" },
    input: "active=false?",
  },
  {
    expected: { age: "24" },
    input: "age=24?",
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = queryParams(testCase.input);\
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
