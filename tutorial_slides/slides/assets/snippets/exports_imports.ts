export const myConst = 12345; // simple export
 
// default exports
export default calculateRectangle = (width: number, length: number) => {
  return width * length;
}
 
// alternative
const calculateRectangle2 = (width: number, length: number) => { ... }
export default calculateRectangle2; // exported function
export default new MyClass(); // exported instance
export { read, write, standardOutput as stdout } from './inout'; // re-export
 
// import
import { PI, calculateCircumference } from './src/circle' // imports selected types
import calculateRectangle from './src/rectangle' // imports everything with an alias
import * as flash from './flash-message'; // imports everything