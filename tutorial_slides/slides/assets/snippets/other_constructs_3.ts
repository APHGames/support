// arrow functions
const myMultiply: (val1: number, val2: number) => number;
 
let myFunction = (val1: number, val2: number) => {
  return val1 + val2;
}

// rest operator
function displayTags(targetElement: HTMLElement, ...tags: string[]) { 
    for(let i in tags) { // do something here }  
}
  
displayTags(myElement, "tag1", "tag2", "tag3");
  
// spread operator (good for shallow copy)
let copy = { ...original };
let merged = { ...foo, ...bar, ...baz };

let sprites: Sprite | Sprite[]; // union type
let spriteMesh: Sprite & Mesh; // intersection type