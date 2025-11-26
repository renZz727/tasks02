export function queryParams(str: string): Record<string, unknown> {
  const values = str.replaceAll("?", "").split("&");
  const result = {};
  for (const value of values) {
    const [key, val] = value.split("=");
    result[key] = val;
  }
  return result;
}

