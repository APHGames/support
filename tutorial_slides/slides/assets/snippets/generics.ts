class Greeter<T> {
    
    greeting: T;
  
    constructor(message: T) {
      this.greeting = message;
    }
}
   
let greeter = new Greeter<string>('Hello, world');
  
// default parameters
class Greeter<T = any> {
    greeting: T;
}