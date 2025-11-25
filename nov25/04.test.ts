import { snakeToCamelCase } from "./04.qn.js";

interface Testcases {
  expected: string;
  input: string;
}
const testCases = [
  { expected: "helloWorldFromJs", input: "hello_world_from_js" },
  { expected: "welcomeEveryone", input: "welcome_everyone" },
  { expected: "snakeCase", input: "snake_case" },
  { expected: "isPalindrome", input: "is_palindrome" },
  { expected: "isPrime", input: "is_prime" },
  { expected: "primeNumber", input: "prime_number" },
  { expected: "systemError", input: "system_error" },
  { expected: "notASystemError", input: "not_a_system_error" },
  { expected: "validNumber", input: "valid_number" },
  { expected: "invalidNumber", input: "invalid_number" },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = snakeToCamelCase(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
