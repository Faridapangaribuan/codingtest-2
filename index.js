function reverseAndTimeArray(arr) {
 
    if (arr.length === 0) return [];
    

    let reversedArr = arr.slice().reverse();


    let resultArr = reversedArr.map((_, i) => 
        reversedArr.reduce((sum, value, index) => 
            sum + (index <= i ? value : 0), 0)
    );
    
    return resultArr;
}

console.log(reverseAndTimeArray([1, 4, 6, 7]));
console.log(reverseAndTimeArray([7, 4, 2, 1])); 
console.log(reverseAndTimeArray([5]));          
console.log(reverseAndTimeArray([1, 3]));       