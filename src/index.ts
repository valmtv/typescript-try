// PRIMITIVE types: string, number, boolean
const str: string = "Hello World";

const num1: number = 52;
const num2: number = 52.5;

const isTrue: boolean = true;
const isFalse: boolean = false;

//OBJECT TYPE

const obj: {a: number, b: number} = {
  a: 5,
  b: 64,
};

//FUNCTION in () types for parametres after (): type for function return 

function sum (a: number, b: number): number {
  return a + b;
};

const greets = (name: string, surname: string): string => {
  return "Hello " + name + " " + surname;
};
//OPTIONAL PROPERTIES IN FUNCTION(npot all are required)

const sayHello = (name: string, surname?: string) => {
  console.log(`Hello "name" "surname"!`);
};

sayHello("Valerii");
sayHello("Valerii", "Matviiv")
// ARRAY
const strArray: string[] = ["apple", "orange", "banana"];

const numArray: number[] = [4, 53.5, 0.7]



// 
const page: object = () => {
  const randomNumberTwo: number = 1;
  const sum = (num1: number, num2: number) => {
    return console.log(num1 + num2);
  };

  const operationSum: void = sum(randomNumberTwo, 7);
  return operationSum; 
};


// SELF-MADE TYPES

interface threeNumbers {
  num1: number;
  num2: number;
  num3: number;
}

const numbers: threeNumbers = {
  num1: 5,
  num2: 353,
  num3: 9,
};


// UNIONS. Declare unique types which could be different

type numArrayOrString = number[] | string;
const arrayNum: numArrayOrString = [1, 2, 3, 4, 5];
const strng: numArrayOrString = "It`s a simple string";

// TYPEOF operator (checking type)

const showObject = (obj: string | number) => {
  if (typeof obj === "string") {
    return console.log(obj);
  } 
    else if (typeof obj === "number") {
      return console.log(obj + 5);}
};

showObject(9);
showObject("Another simple string");
