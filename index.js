function transformArray(arr) {
    return arr.map(num => arr.reduce((acc,val) => acc + val, 0) - num);
}

const input = [1,4,6,7];
const output = transformArray(input);
console.log(output);