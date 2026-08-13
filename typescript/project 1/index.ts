// let username: string = "virat Kohli";
// let age: number = 45;
// let student: boolean= true;

// const skill : string[] = [
//     "node js","react","javascript",'html',"css"
// ]

// const marks : number[] = [1,2,3,4,5,6,7,8,9]

// let data: any = "hello"

// data = true;
// data = 12
// data = [1,2,3]

// let data2 : unknown = "virat"

// data2 = 123
// data2 = true

// data2 = "virat kohli"


// if(typeof(data2) === "string"){
//     console.log(data2.toUpperCase())
// }


// let username :string | undefined;

// let selectedUser: string | null

// let three : unknown = 25

// if(typeof three ===  "number") {
//     console.log(three * three)
// }

// interface product {
//     id: number,
//     name: string,
//     price: number,
//     instock: boolean,
//     category: string,
//     discount?: number
// }


// const product : product = {
//     id: 12,
//     name: "jigar",
//     price: 15000,
//     instock: true,
//     category: "phone",
//     discount: 25
// }

// type status  =  "pending" | "success" | "error";

// type id = string | number;

// interface Admin {
//     name: string,
//     email: string
//     permistion: string
// }


// function add(a:number, b:number): number{
//     return a + b
// };
// add(2,3);

// const isEven = (num: number) :boolean =>{
//     return num % 2 === 0
// }

// isEven(25)

// function great(name: string, age?: number): string {
//     return name
// }

// type calculatorFunction = (a: number,b:number) => number;

// const calculate :calculatorFunction = (a,b) => {
//     return a + b
// }



function multiply(a:number, b:number) :number {
    return a * b
}

function add(...numbers: number[]) : number {
    return numbers.reduce((total,num) => total + num, 0)
}

// console.log(add(1,2,3,4,5))

const isEven = (num: number) :boolean =>{
    return num % 2 === 0
}

function identify<T>(value: T) : T{
    return value
}

identify("virat")
identify(25)
identify(true)

function getFirst<T>(value: T[]) :T {
    return value[0]
}

// console.log(getFirst([10,20,30]))
// console.log(getFirst(["jigar", "virat"]))

interface ApiResponse <T>{
    data: T,
    success: boolean,
    message: string
}

interface Product {
    id: number,
    name:  string,
    price: number
}

const productresponse : ApiResponse<Product> ={
    data: {
         id: 1,
        name: "Realme 15 5G",
        price: 31000
    },
    success: true,
    message: "data fetched"
}

interface User {
    id: number,
    name: string,
}


// const userResponse : ApiResponse<User> = {
//     data: {
//         id: 1,
//         name: "virat",
//     },
//     success: true,
//     message: "fetched"
// }


// Generic Constraints

function getId<T extends {id : number}> (data: T): number{
    return data.id
}

getId({
    id: 12,
    name: "virat"
})

// keyof ka simple meaning:
// Object/interface ki saari keys ka union bana do.

type ProductKey = keyof Product;

let key: ProductKey;

const product = {
  id: 1,
  name: "Realme 15 5G",
  price: 31000
};

function getProperty<T, K extends  keyof T> (data: T,Key: K) {
    return data[Key]
}

// console.log(getProperty(product , "name"))

// Utility Types

// Partial --> matala sari propaerty ko optional bana dena 


interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const updateUser : Partial <User> = {
    name: "anuj"
}

type UserPreview = Pick <  
    User,
    "name" | "email"
>

const userPrew :UserPreview = {
    name: "rohit",
    email: "rohit@gmail.com"
}

type UserWithoutId = Omit<User, "id">

const createUser : UserWithoutId = {
    name: "virat",
    email: "aman",
    age: 25
}


function printValue(value: string | number) : string | number {

    if(typeof value === "string") {
        return value.toUpperCase()
    }
    return value * 2
 
}


console.log(printValue("rohit"))
console.log(printValue(25))