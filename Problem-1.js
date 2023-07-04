// Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
// Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
// Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

//                  ** Solution **                  //

class BasicCalculator {
  constructor(a, b, operation) {
    (this.a = Number(a)), (this.b = Number(b)), (this.operation = operation);
  }

  calculateResult() {
    let ans;
    if (this.operation == "addition") {
      ans = this.a + this.b;
    } else if (this.operation == "subtraction") {
      ans = this.a - this.b;
    } else if (this.operation == "multiplication") {
      ans = this.a * this.b;
    } else if (this.operation == "division") {
      ans = this.a / this.b;
    } else {
      return "Invalid Inputs...!";
    }
    return ans;
  }
}

const calculator = new BasicCalculator(12, 0, "division").calculateResult();

console.log(calculator);
