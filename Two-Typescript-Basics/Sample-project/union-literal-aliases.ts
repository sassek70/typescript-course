// type aliases
    //can use any name that isn't a built in JS/TS name like "Date, Number, Math etc.". Must be capital letter
    // type aliases help reduce errors/typos, works like a global variable that can't be changed once declared
    // can also provide aliases to object types
type Combinable = string | number; // can now use this in typecasting
type ResultConversions = 'as-number' | 'as-text';

    //object alias example:
//     const greet = (user: { name: string; age: number }) => {
//         console.log('Hi, I am ' + user.name);
//       }
       
//       const greet = (user: { name: string; age: number }, checkAge: number)  => {
//         return checkAge > user.age;
//       }
  
//  Can be aliased as:
  
//       type User = { name: string; age: number };
       
//       const greet = (user: User) => {
//         console.log('Hi, I am ' + user.name);
//       }
       
//       const greet = (user: User, checkAge: number) => {
//         return checkAge > user.age;
//       }




//Union Type

//use | to set allowed types, can have as many as you want number | string| boolean etc.
const combine = (input1: number | string, input2: number | string) => {
    let result;
    //use a runtime check to determine the value to prevent error of ` "+" doesn't work on string`
    //This check is not always required, depends on application & purpose of function.
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        // if they are numbers, add them as numbers
        result = input1 + input2
    } else {
        //if they aren't both numbers
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(20, 30)
console.log(combinedAges)

const combinedNames = combine("Max", "Anna")
console.log(combinedNames)


//Literal Type
// force a type output - convert to string
// const combine2 = (input1: number | string, input2: number | string, resultConversion: string) => {
//     let result;
//     //use a runtime check to determine the value to prevent error of ` "+" doesn't work on string`
//     //This check is not always required, depends on application & purpose of function.
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         // if they are numbers, add them as numbers
//         result = input1 + input2
//     } else {
//         //if they aren't both numbers
//         result = input1.toString() + input2.toString()
//     }

//     if (resultConversion === 'as-number') {
//         return +result //converts to number could also do parseFloat(result) or parseInt(result)
//     } else {
//         return result.toString()
//     }
// }

//can also combine second check into first if statement
// setting resultConversion to be specific strings - Literal Type using Union Type
// this add type safety and ensures that an unused string can't be entered and cause errors in the app.
const combine2 = (input1: Combinable, input2: Combinable, resultConversion: ResultConversions) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        // Conver to numbers then add, this will prevent concatonating the numbers as a string as in the previous example. depends on use case.
        result = +input1 + +input2
    } else {
        //if they aren't both numbers
        result = input1.toString() + input2.toString()
    }

    return result
}

const combinedAges2 = combine2(20, 30, 'as-number')
console.log(combinedAges2)

const combinedStringAges = combine2("20", "30", 'as-number')
console.log(combinedStringAges)

const combinedNames2 = combine2("Max", "Anna", 'as-text')
console.log(combinedNames2)