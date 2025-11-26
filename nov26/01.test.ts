import { celsiusToFahrenheit } from "./01.qn.js";

interface Testcases {
    expected: string;
    input: number;
}
const testCases = [
  {expected: '32.0°F', input: 0}, 
  {expected: '89.6°F', input: 32}, 
  {expected: '50.0°F', input: 10},
  {expected: '158.0°F', input: 70},
  {expected: '179.6°F', input: 82},
  {expected: '215.6°F', input: 102},
  {expected: '298.4°F', input: 148},
  {expected: '2732.0°F', input: 1500},
  {expected: '20.0°F', input: -6.67},
  {expected: '160.0°F', input: 71.11},
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = celsiusToFahrenheit(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
