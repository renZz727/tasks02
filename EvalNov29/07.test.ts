import { validateHtml } from "./07.qn.js";
interface Testcase {
  expected: Boolean;
  input: string;
}
const testCases: Testcase[] = [
  { expected: true, input: "<div><span>Hello</span></div>" },
  { expected: true, input: "<div><div><span>Hello</span></div></div>" },
  { expected: false, input: "<div><div><span>Hello</span></div>" },
  { expected: true, input: "<div><p>Hello</p></div>" },
  { expected: false, input: "<div><p>Hello</p>" },
  { expected: true, input: "<ul><li>list</li></ul>" },
  { expected: true, input: "<ul><li></li></ul>" },
  { expected: false, input: "<ul><li></li></li>" },
  { expected: true, input: "<html><ul><li></li></ul></html>" },
  { expected: false, input: "" },
];
test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = validateHtml(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);

    isSame
      ? console.log(`Testcase ${index + 1} passed`)
      : console.log(`Testcase ${index + 1} failed`);
  });
}
