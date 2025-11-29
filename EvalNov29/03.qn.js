function convertBytes(bytes) {
    result = "";
    let rem = 0;
    let gb = 1048576;
    let mb = 1024;
    let kb = 1024;
    if(bytes < 1024) {
        return result += 
    }
    // if(bytes >= gb) {
    //     rem = bytes % gb;
    //     result += rem ? Math.floor(bytes / gb) + "." + rem + "gb" : bytes / gb + "gb";
    // }
    // else if(bytes >= 1024) {
    //     rem = bytes % mb;
    // }
    return result;
}

console.log(convertBytes(2097152));
console.log(convertBytes(2202009));