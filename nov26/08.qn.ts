export function replaceNumbers(str: string): string {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str.charAt(i))) && str.charAt(i) !== " ")
      str = str.replace(str.charAt(i), "#");
  }
  return str;
}
