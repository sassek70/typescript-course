
// Type "unknown" is restrictive compared to "any"
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Kevin';


// check the type of input first

    // userName = userInput; // causes error even though userInput is a string

if (typeof userInput === 'string') {
    userName = userInput;
}

// this function will never return a value. It doesn't even give "undefined.". 
// It infers "void" as default but can be set to "never" to make it clear there will never be a return value
// "Never" is also used for infinite loops
const generateError = (message: string, code: number): never => {
    throw {message: message, errorCode: code} 
}

generateError("An error occurred!", 500)