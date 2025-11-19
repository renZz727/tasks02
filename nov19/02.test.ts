import { parseQueryString } from "./02.qn.js";
interface TestCase {
  expected: Record<string, unknown>;
  input: string;
}
const testCases: TestCase[] = [
  { expected: { name: "John", age: "20" }, input: "name=John&age=20" },
  { expected: { name: "Joel", age: "38" }, input: "name=Joel&age=38" },
  {
    expected: { product: "bat", price: "580" },
    input: "product=bat&price=580",
  },
  {
    expected: { product: "waterbottle" },
    input: "product=waterbottle",
  },
  {
    expected: { name: "Rx", age: "24", address: "xx35", isEmp: "false" },
    input: "name=Rx&age=24&address=xx35&isEmp=false",
  },
  {
    expected: { country: "India", state: "Kerala" },
    input: "country=India&state=Kerala",
  },
  {
    expected: { country: "India", state: "Kerala", district: "waynad" },
    input: "country=India&state=Kerala&district=waynad",
  },
  {
    expected: {
      country: "India",
      state: "Kerala",
      district: "waynad",
      city: "bathery",
    },
    input: "country=India&state=Kerala&district=waynad&city=bathery",
  },
];

test(testCases);
function test(testCases: TestCase[]): void {
  testCases.forEach((testCase, index) => {
    const result = parseQueryString(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    if (isSame) console.log(`Testcase ${index + 1} passed`);
    else console.log(`Testcase ${index + 1} failed`);
  });
}
