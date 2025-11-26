import { replaceNumbers } from "./08.qn.js";

interface Testcases {
  expected: string;
  input: string;
}
const testCases: Testcases[] = [
  { expected: "Room ## on floor #", input: "Room 45 on floor 3" },
  { expected: "call ###", input: "call 911" },
  { expected: "###$", input: "467$" },
  { expected: "### error", input: "404 error" },
  { expected: "###,###s", input: "120,000s" },
  { expected: "###abc", input: "107abc" },
  { expected: "####bcd", input: "####bcd" },
  { expected: "bcd###ef#", input: "bcd###ef3" },
  { expected: "", input: "" },
  { expected: "#####", input: "#####" },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = replaceNumbers(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
