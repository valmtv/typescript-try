// PRIMITIVE types: string, number, boolean
const str: string = "Hello World";

const num1: number = 52;
const num2: number = 52.5;

const isTrue: boolean = true;
const isFalse: boolean = false;

//FUNCTION in () types for parametres after (): type for function return 

function sum (a: number, b: number): number {
  return a + b;
};

const greets = (name: string, surname: string): string => {
  return "Hello " + name + " " + surname
};

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
