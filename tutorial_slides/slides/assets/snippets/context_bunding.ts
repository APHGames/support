class ContextExample {
    private x = 0;
   
    constructor() {
      setTimeout(this.arrowFunc, 1000);
      setTimeout(this.regularFunc, 1000); // will not work
      setTimeout(this.regularFunc.bind(this), 1000);
    }
   
    private arrowFunc = () => {
      this.x = 5;
    }
  
    private regularFunc() {
      this.x = 5;
    }
}