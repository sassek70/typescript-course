//########### BASIC TYPES #############

console.log('Your code goes here...');

const add = (n1: number, n2: number, showResult: boolean, resultPhrase: string) => {

    //Typescript can infer types, since n1 & n2 are declared as numbers
    const result = n1 + n2
    if (showResult) {
        console.log(resultPhrase + result, typeof result)
    }
    return result
}

//if using let without declaring a value, set types. Otherwise, TS can usually interpret it.
let number3: number
number3 = 4
// number3 = "4" //throws error if set to string
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Your result is: "

const result = add(number1, number2, printResult, resultPhrase)
// console.log(result)