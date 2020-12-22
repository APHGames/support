// dynamic keys
{ [key: string]: Object[] }
 
// type aliases
type Name = string | string[]

// function alias
type MyFunction = (param1: number, param2: number) => string;

// types for polymorphism
type Shape = Square | Rectangle | Circle;
 
// function types
function getUser(callback: (user: User) => any) { callback({...} ) }
 
// default parameters
const greet = (name: string = 'Robert') => console.log(`Hello, ${name}`);
 
// array destructuring
const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;