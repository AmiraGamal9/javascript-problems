

// problem 1 : Filtering an Array

 let evenNums = (array) => array.filter((ele) => ele % 2 == 0)  

 console.log(evenNums([3,6,8,2,7,3,4]))



 ////////////////////////////////////////////////////////////////////////////////////////////////

 // problem 2 : Find the Largest Number

 let largestNum = (arr) => console.log(Math.max(...arr))

 const arr1 = [52,42,30,7,89];

 (largestNum(arr1))


 ////////////////////////////////////////////////////////////////////////////////////////////////

// problem 3 : Reverse a String

 let reversedStr = (string) => string.split("").reverse().join("")

 console.log (reversedStr("khadija"))


 ////////////////////////////////////////////////////////////////////////////////////////////////

// problem 4 : Remove Duplicates

function removeDuplicates (array) {
    let newArr = [];
    array.map((ele) => newArr.indexOf(ele) == -1 ? newArr.push(ele) : array.splice(array.indexOf(ele),0))
    return newArr;
}

 console.log(removeDuplicates([2,3,2,5,7,7,9,1,1]))





