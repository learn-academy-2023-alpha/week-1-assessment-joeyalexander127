// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines 
// which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
//create a function that takes in two parameters for the fruits we will be comparing
// create a conditional statement using if/else to compare the lengths of each string taken
// return the longer of the two strings


// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const longest = (string1, string2) => {
        if(string1.length > string2.length){
            return `${string1}`
        } else if(string2.length > string1.length){
            return `${string2}`
        } else {
            return "Something went wrong"
        }
}
console.log(longest(fruit1,fruit2))
// --> given output: banana
console.log(longest(fruit3,fruit4))
// --> given output: cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Create a function that takes in the given variables as parameters
// Create a conditional statement that checks whether or not the numbers make the threshhold for the 
// boiling tempt of 212 degrees f or is at the threshhold
// output: display if the value of the variable is below/above or at boiling point

const isBoiling = (num) => {
    if(num == 212){
        return `${num} is at boiling point`
    } else if(num > 212){
        return `${num} is above boiling point`
    } else if(num < 212){
        return `${num} is below boiling point`
    } else
    return "Something went wrong"
}

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

console.log(isBoiling(temp1))
console.log(isBoiling(temp2))
console.log(isBoiling(temp3))
// given output --> 42 is below boiling point
//                  350 is above boiling point
//                  212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using
 // the test variables provided below.

// Pseudo code:
//create a new empty array using var (because we will be minipulating it)
// Use concat to combine the two given arrays.
// use the built-in-method (.length) to find the new length of the combined arrays.
// output the the new length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

var combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(combinedArray.length)

// Expected output: 9
// given output --> 9 

// --------------------3) Create the code that will reverse the letters of a string using the test 
// variable provided below.

// Pseudo code:
//Create an empty array using var
// place the string into our created array using the <split> built-in-method
// reverse our populated array
// convert the array about to a string in the reversed order using the build-in-method <join>
// Out put the reversed string


const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"

var reversedArray = currentCohort.split("")
reversedArray.reverse()
console.log(reversedArray.join(""))
// given output --> 3202 ahplA



// --------------------4) Create the code that will return the last index of the given value from the  
// array using the test variables provided below.

// Pseudo code:
// create a function that take the given values (42 & 10) as parameters 
// use the built in method <lastIndexOf> on the array and use the value that was given to locate its index
// return the last index of the value that was used 
// out put the last index of both values used in the created function

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const checkArray = (num) => {
     return myNumbers.lastIndexOf(num)
}
console.log(checkArray(givenValue1))
// --> given output: 7
console.log(checkArray(givenValue2))
// --> given output: 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to 
// smallest. Use the test variables provided below.

// Pseudo code:
// create a function that takes the given array as a parameter
// take the array and use the build-in-method <sort()> to sort it smallest to largest
// use the built in reverse method to reverse the asorted array to display in smallest to largest
// out put the array that was taken as a parameter it in its reversed sorted form.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const sortArray = (num) => {
    num.sort()
    return num.reverse()
}
console.log(sortArray(sanDiegoSummerTemperatures))
// --> given output:[
//     82, 80, 79, 77,
//     76, 73, 72
//   ]
console.log(sortArray(sanDiegoWinterTemperatures))
// --> given output:[
//   68, 67, 66, 66,
//   62, 59, 59
// ]
