const readline = require("readline-sync")

let name = readline.question("Who are you? ")
let height = readline.questionInt("How tall are you? ")

console.log("Pleased to meetcha, " + name)

if(height > 7 ){
    console.log("Please consider trying out for the basketball team")
} else {
    console.log("Please consider trying out for the rugby team")
}