let isDone: boolean;
const myName: string = 'Robert'; // assignment
const myName = 'Robert'; // type determined from the right side
 
const hobbies: string[] = ['Programming', 'Cooking']; // array
const address: [string, number] = ["Street", 99]; // tuple

let repeatType: 'repeat-x' | 'repeat-y' | 'no-repeat';  // union enum

let myCar: any = 'BMW'; // any
const greeting = `Hello I'm ${userName}`; // template literal