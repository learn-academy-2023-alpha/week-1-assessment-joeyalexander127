// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5 
// b) Verify and explain: .push is a mutator method which will return the length of the new array

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the .length method will return the length of the string - including all spaces and symbols

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: will display the fourth index of the given string ("o")
// b) Verify and explain: the "o" (4th index) was displayed because you are grabbing the index of 4 of the
// the greeting variable of string

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Index starts at 0 therefore it will return the second item in the array that 
// the variable index is = 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will not work. 
// b) Verify and explain: it didnt work because <toUpperCase()> is a BIM or function for strings not arrays

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Im guessing it will out put "string" because its the only value type that uses length
// b) Verify and explain: "number" was displayed and i truly have no idea even after google.
