enum Color {
    Gray, // 0
    Red, // 1
    Green = 100, // 100
    Blue, // 101
    Yellow = 2 // 2
}
   
const myColor: Color = Color.Green
console.log(myColor); // Prints: 100
  
const colors = Object.keys(Color); // gets all enum keys