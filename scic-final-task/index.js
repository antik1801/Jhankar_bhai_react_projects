// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(string) {
    const stringToArray = string.split("")
    const reverseArray = stringToArray.reverse()
    const joinArray = reverseArray.join("")
    return joinArray
}
const result = reverseString("hello world")
// console.log(result)

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function positiveNumbersSum(array) {
    let positiveNumberTotal = 0
    array.map(element => {
        if (element >= 0) {
            positiveNumberTotal += element
        }
    })
    return positiveNumberTotal
}
const totalSum = positiveNumbersSum([2, -5, 10, -3, 7])
// console.log(totalSum)

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function frequentNumber(array) {
    const indexArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    array.map((element, index) => {
        indexArray[element] = indexArray[element] + 1
    })

    return indexArray
}

const mostFrequentValue = frequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5])
// console.log(mostFrequentValue)

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function indicesValues(array, target) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
             return [i, j]
            }
        }
    }
}
const resultValues = indicesValues([1, 3, 6, 8, 11, 15], 9)
// console.log(resultValues)


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(operator1,operator2,operator){
    let result = 0
    operator === "+" ? result=operator1+operator2 : operator ==="-" ? result=Math.abs(operator1-operator2) : operator === "*" ? result=operator1 * operator2 : result =(operator1 / operator2).toFixed(2) 
    return result
}
const resultCalculator = calculator(25,5,"*")
// console.log(resultCalculator)

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const crypto = require('crypto');
function randomPasswordsGenerator(length=7){
crypto.randomBytes(length, (err, buf) => {
  if (err) {
    console.log(err);
    return;
  }
    console.log((buf.toString('base64'))) 
})
}
// randomPasswordsGenerator(7)


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToIntigerConverter(roman){
    // sum = 0, roman = ["I","X"]
    // romans [I,II,III,IV,V,VII,VIII,IIX,IX,X]
    // roman.split("").map(eachNumber=> { romans.map(number,index=>{ eachnumber(I) === number(I) && sum(0)+= index+1}) }) - 
    let sum = 0
    const romansNumbers = ["I","II","III","IV","V","VI","VII","VIII","IX","X"]
    return roman.split("").map(eachNumber=>romansNumbers.map((number,index)=>eachNumber === number && (sum += index+1)))

     // sum = 0, roman = ["I","X"]
    // romans [I,II,III,IV,V,VII,VIII,IIX,IX,X]
    // roman.reverse().

}
const resultIntiger = romanToIntigerConverter("XVI")
// console.log(resultIntiger)



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestValueOfArray(array)
{
        let map = new Map();
        let newArray = new Array();
        for (let i = 0; i < array.length; ++i)
        {
            if (map.get(array[i]) == null)
                newArray.push(array[i]);
            map.set(array[i], true);
        }
        return  newArray.sort(function(a,b){return a-b})[1]

}
const resultArray = secondSmallestValueOfArray([1,5,4,4,5,6,4,1,3,5]);
console.log(resultArray)
 