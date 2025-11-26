import { commonKeys } from "./06.qn.js";

interface Testcases {
  expected: string[];
  obj1: Record<string, unknown>;
  obj2: Record<string, unknown>;
}
const testCases: Testcases[] = [
  {
    expected: ["name"],
    obj1: { name: "Brad", age: "25" },
    obj2: { name: "Titan", place: "mars" },
  },
  {
    expected: ["name", "age"],
    obj1: { name: "Brad", age: "25" },
    obj2: { name: "Titan", place: "mars", age: "24" },
  },
  {
    expected: ["name", "age"],
    obj1: { name: "Brad", age: "25" },
    obj2: { name: "Titan", place: "mars", age: "24" },
  },
  {
    expected: ["name", "age", "place"],
    obj1: { name: "Brad", age: "25", place: "jupitar" },
    obj2: { name: "Titan", place: "mars", age: "24" },
  },
  {
    expected: ["name", "age", "place"],
    obj1: { name: "Brad", age: "25", place: "jupitar" },
    obj2: { name: "Titan", place: "mars", age: "24", active: true },
  },
  {
    expected: ["name", "age", "place", "active"],
    obj1: { name: "Brad", age: "25", place: "jupitar", active: false },
    obj2: { name: "Titan", place: "mars", age: "24", active: true },
  },
  {
    expected: ["name", "active"],
    obj1: { name: "Brad", age: "25", place: "jupitar", active: false },
    obj2: { name: "Titan", active: true },
  },
  {
    expected: ["active"],
    obj1: { place: "jupitar", active: false },
    obj2: { name: "Titan", active: true },
  },
  {
    expected: [],
    obj1: { place: "jupitar" },
    obj2: { name: "Titan", active: true },
  },
  {
    expected: [],
    obj1: {},
    obj2: {},
  },
];

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = commonKeys(testCase.obj1, testCase.obj2);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`TestCase ${index + 1} passed`)
      : console.log(`TestCase ${index + 1} failed`);
  });
}
