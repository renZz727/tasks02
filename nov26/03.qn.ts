export function toObjects(arr: Record<string, unknown>[]) : Record<string, unknown>{
    const result = {}
    for(const {key, value} of arr) {
        result[key] = value;
    }
    return result;
}
