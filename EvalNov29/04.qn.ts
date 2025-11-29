export function templateParser(
  str: string,
  obj: Record<string, unknown>
): string {
  for (let key in obj) {
    str = str.replaceAll(`{{${key}}}`, obj[key]);
  }
  return str;
}
