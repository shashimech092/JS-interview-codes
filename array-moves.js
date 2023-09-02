class CircularArray {
    constructor(values) {
      this.values = values || [];
      this.currentIndex = 0;
    }
  
    moveLeft() {
      this.currentIndex = (this.currentIndex - 1 + this.values.length) % this.values.length;
    }
  
    moveRight() {
      this.currentIndex = (this.currentIndex + 1) % this.values.length;
    }
  
    getCurrentValue() {
      return this.values[this.currentIndex];
    }
  }
  
  // Example usage
  const values = ['A', 'B', 'C', 'D'];
  const circularArray = new CircularArray(values);
  
  console.log(circularArray.getCurrentValue()); // Output: 'A'
  
  circularArray.moveRight();
  console.log(circularArray.getCurrentValue()); // Output: 'B'
  
  circularArray.moveRight();
  console.log(circularArray.getCurrentValue()); // Output: 'C'
  
  circularArray.moveLeft();
  console.log(circularArray.getCurrentValue()); // Output: 'B'
  