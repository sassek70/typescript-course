
//Typescript inferred types - this is optimal
const person1 = {
    name: "kevin",
    age: 32,
}

// explicitly declare types - sub-optimal
const person2: {
    name: string;
    age: number;
} = {
    name: "kevin",
    age: 32,
}
//nested object works the same - inferred - optimal
const person3 = {
    name: "kevin",
    age: 32,
    breakfast: {
        mainDish: "waffles",
        eggs: 3,
        coffee: true,
    }
}

// explicitly decalred - sub-optimal
const person4: {
    name: string;
    age: number;
    breakfast: {
        mainDish: string;
        eggs: number;
        coffee: boolean;
    }
} = {
    name: "kevin",
    age: 32,
    breakfast: {
        mainDish: "waffles",
        eggs: 3,
        coffee: true,
    }
}

//object with array

const person5 = {
    name: "kevin",
    age: 32,
    breakfast: {
        mainDish: "waffles",
        eggs: 3,
        coffee: true,
    },
    hobbies: ["gaming", "tv"]
}

for (const hobby of person5.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) // !!! ERROR !!!, .map() doesn't work on strings
}

// Tuple - Array that is fixed types. 
// Tuple - have to explicity declare role as string and number. Inferring won't work
// if inferred, Typescript will let each value be either a number or string
const person6: {
    name: string;
    age: number;
    breakfast: {
        mainDish: string;
        eggs: number;
        coffee: boolean;
    };
    hobbies: string[] // array of strings
    role: [number, string] // tuple
    } = {
    name: "kevin",
    age: 32,
    breakfast: {
        mainDish: "waffles",
        eggs: 3,
        coffee: true,
    },
    hobbies: ["gaming", "tv"],
    role: [2, 'author']
}

// tuples prevent a redeclaration with an array of a different length:
    // person6.role = [1, 'author', 'admin'] // Gives error due to length

// tuples don't prevent a push:
    person6.role.push("admin") // no error. roles will now have the 3 values when console logged.

// person6.role[1] = 10 // gives error since [1] must be a number in the typecasting


// Enum

// Typescript specific type, gives enumerated list starting at 0 with human-readable labels.

//Enum is a custom type, capital letter definition, values are typically all caps
enum Role {ADMIN, READ_ONLY, AUTHOR};
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR}; can define own number and others will update (5, 6, 7), or define each number
// enum Role {ADMIN = 5, READ_ONLY = "READ_ONLY", AUTHOR}; can mix values, numbers are standard though.



const person7 = {
    name: "kevin",
    age: 32,
    breakfast: {
        mainDish: "waffles",
        eggs: 3,
        coffee: true,
    },
    hobbies: ["gaming", "tv"],
    role: Role.AUTHOR
}

if (person7.role === Role.AUTHOR) {
    console.log('is author')
}


console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)
console.log(person5)
console.log(person6)