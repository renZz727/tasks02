export function toQueryString(obj: Record<string, unknown>): string {
  let result = "";
  for (const key in obj) {
    result += `${key}=${obj[key]}&`;
  }
  return result.slice(0, result.length - 1);
}
