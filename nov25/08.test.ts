import { toQueryString } from "./08.qn.js";

interface Testcase {
  expected: string;
  input: Record<string, unknown>;
}
const testCases = [
  { expected: "name=John&age=30", input: { name: "John", age: 30 } },
  { expected: "name=Joel&age=34", input: { name: "Joel", age: 34 } },
  {
    expected: "name=Joel&age=34&email=joel@",
    input: { name: "Joel", age: 34, email: "joel@" },
  },
  { expected: "age=34&name=Ram", input: { age: 34, name: "Ram" } },
  { expected: "district=waynad", input: { district: "waynad" } },
  {
    expected: "email=user@gmail&password=user",
    input: { email: "user@gmail", password: "user" },
  },
  { expected: "age=24&gender=male", input: { age: 24, gender: "male" } },
  { expected: "name=Joy&isAdmin=false", input: { name:'Joy', isAdmin: false } },
  { expected: "name=Joy&isAdmin=true", input: { name:'Joy', isAdmin: true} },
  { expected: "name=Joy&isAdmin=true&isEmployee=true", input: { name:'Joy', isAdmin: true ,isEmployee: true} },
];

test(testCases);
function test(testCases: Testcase[]): void {
  testCases.forEach((testCase, index) => {
    const result = toQueryString(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
