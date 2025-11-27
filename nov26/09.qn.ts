const objectKeys = ["id", "value"] as const;
// const objectKeyType = typeof objectKeys[number]
export function mergeIds(arr : Record<keyof typeof objectKeys[number], unknown>[]) : Record<string, unknown>[]{

  const map = {};
  const result = [];

  for (let obj of arr) {
    if (map[obj.id]) {
      map[obj.id] = map[obj.id] + obj.value;
    } else {
      map[obj.id] = obj.value;
    }
  }

  for (let key in map) {
    let obj = {};
    obj["id"] = Number(key);
    obj["value"] = map[key];
    result.push(obj);
  }
  return result;
}
