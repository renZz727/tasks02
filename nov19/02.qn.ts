type Obj = Record<string, unknown>;
export function parseQueryString(str: string) {
  const parts = str.split("&");
  const obj: Obj = {};

  for (let i = 0; i < parts.length; i++) {
    const [key, value] = parts[i].split("=");
    obj[key] = value;
  }
  return obj;
}
