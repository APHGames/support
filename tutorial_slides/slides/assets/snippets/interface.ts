interface Colored {
    select(): void;
}
  
class Pixel extends Point implements Colored {
    select(): void { ... }
}