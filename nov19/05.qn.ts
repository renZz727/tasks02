export function pathToKey(
  obj: Record<string, unknown>,
  k: string
): string[] | string {
  let res = "";
  function recurion(
    obj: Record<string, unknown>,
    k: string,
    parentKey = "",
    result: Record<string, unknown> = {}
  ) {
    for (let key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (key === k) res = newKey;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        recurion(obj[key] as Record<string, unknown>, k, newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  recurion(obj, k);
  if (res.length === 0) return "not found";
  return res.split(".");
}
