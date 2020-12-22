class Point {
    x: number;
    y: number;
    
    protected static instances = 0; // initial value
   
    constructor(x: number, y: number) {
      Point.instances++;
      this.x = x;
      this.y = y;
    }
}
  
// abstract class
abstract class Shape {
    abstract calcSize(): number;
}