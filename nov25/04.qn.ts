export function snakeToCamelCase(str: string): string {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" && str[i + 1].toLowerCase() === str[i + 1]) {
      result += str[i + 1].toUpperCase();
      i++;
    }
    else result += str[i];
  }
  return result;
}
