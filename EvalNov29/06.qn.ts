export function compression(input: string, type: string): string {
  const map: Record<string, string> = {};

  let result = "";
  if (type === "encrypt") {
    for (let char of input) {
      map[char] = 1;
    }
    for (let i = 1; i < input.length; i++) {
      if (input[i] === input[i - 1]) {
        map[input[i]] = map[input[i]] + 1;
      }
    }
    for (let key in map) {
      result += `${key}${map[key]}`;
    }
  } else if (type === "decrypt") {
    for (let i = 0; i < input.length; i += 2) {
      let char = input[i];
      result += char.repeat(input[i + 1]);
    }
  }
  return result;
}
