function reverseAndMultiply(arr) {
    let reversedArr = arr.reverse();
    let resultArr = reversedArr.map(num => num * 2);
    return resultArr;
}

console.log(reverseAndMultiply([1, 4, 6, 7]));
console.log(reverseAndMultiply([7, 4, 2, 1]));
console.log(reverseAndMultiply([5]));
console.log(reverseAndMultiply([1, 3]));