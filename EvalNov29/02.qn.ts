type obj = { value: string; expiresAt: number };
export function findExpired(arr: obj[]) {
  const expiredItems = [];
  const now = Date.now();

  for (let item of arr) {
    if (item.expiresAt - now < 1) expiredItems.push(item);
  }
  return expiredItems;
}

test(testCases);
function test(testCases: Testcases[]): void {
  testCases.forEach((testCase, index) => {
    const result = findExpired(testCase.input);
    const isSame = JSON.stringify(testCase.expected) === JSON.stringify(result);
    isSame
      ? console.log(`Testcase ${index + 1} passed`)
      : console.log(`Testcase ${index + 1} failed`);
  });
}
