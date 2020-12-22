// type assertions
let len: number = (input as string).length;
let len: number = (<string> input).length;
 
// optional parameters
interface User {
  name: string, // can be null but not undefined
  age?: number // can be null or undefined
}

// optional chaining (if foo is undefined, it will not throw an error)
let x = foo?.bar.baz();

// nullish coalescing
let x = foo ?? bar; // if foo is undefined, assign bar 

// destructuring declaration (will take 3 attributes from an output)
const { x, y, z } = calcPosition();