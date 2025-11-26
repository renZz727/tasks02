export function commonKeys(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): (number | string)[] {
  const keys = [];
  for (const key1 in obj1) {
    for (const key2 in obj2) {
      if (key1 === key2) {
        keys.push(key1);
      }
    }
  }
  return keys;
}

