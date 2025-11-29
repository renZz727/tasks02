function objectDiff(obj1, obj2) {
  if (a === b) return true;
  if (a === null || b === null) return false;
  console.log(obj1, " ", obj2);

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for(let i = 0;i < a.length;i++) {
        console.log(a[i]);
        
        if(!objectDiff(a[i], b[i])) return false;
        return true;
    }
  }
  if (Array.isArray(a) || Array.isArray(b)) return false;

  if (typeof a === "object" && typeof b === "object") {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
  }

  return 
}

console.log(objectDiff({ x: 1, y: 2, z: 3 }, { x: 1, y: 4, w: 5 }));
