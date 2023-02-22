
// you can declare a return type after the parameters if you want
    const add = (n1: number, n2: number): number => {
        return n1 + n2
    }

// return type of void
// Void return type means it doesn't return a value. Will be console logged as "undefined"
//Typescript will infer a void return type if there is no return.
const printResult = (num: number): void => {
    console.log('Result: ' + num)
}

// use "undefined" return type if you need the function to produce an "undefined" value. Rarely used.
const printResult2 = (num: number): undefined => {
    console.log('Result: ' + num)
    return;
}

// Most common use of needing "return" while not producing a value. However "void" is usually inferred and not needed in this case.
const printResult3 = (num: number): void=> {
    console.log('Result: ' + num)
    return;
}

//callback function typecasting.
// this function sets result to the total of the numbers then invokes a callback function passing
// result as an argument
// casting the callback as void lets TS know that whatever is returned may not be used.
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2
    cb(result)
}

printResult(add(5,12))


//sets type to "any" by default, declaring it as a "Function" type, creates compile error if it typecast as something else.
//however, it can still be redeclared as a different function

// let combineValues: Function;

//This typecasts it as a function that accepts two parameters as numbers and returns a number
let combineValues: (a: number, b: number) => number;

//combineValues is storing a pointer to the "add" function and can be invoked as if it were the add function
//if pointed at "printResult" function, will receive a compile error.
combineValues = add

// combineValues = 5 // setting combineValues to a value after will throw an error in the browser but will still compile.
console.log(combineValues(8, 8))

// Invoking addAndHandle, passing in 2 numbers and a callback function.
// Typecasting on "result" isn't needed. TS infers it should be a number since it is a callback function and can only accept a number where it is defined.

addAndHandle(10, 20, (result) => {
    console.log(result)
})
