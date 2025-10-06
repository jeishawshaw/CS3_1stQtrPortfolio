//factorial

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function factorial(n) {
  if (n < 0) return "Factorial is not defined for negative numbers.";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

rl.question("Enter a number: ", (num) => {
  num = parseInt(num);
  console.log(`The factorial of ${num} is ${factorial(num)}`);
  rl.close();
});


//fibonnaci sequence

process.stdin.on('data', input => {
    let num = parseInt(input.toString().trim());

    function fibonacci(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        let seq = [0, 1];
        for (let i = 2; i < n; i++) {
            seq.push(seq[i - 1] + seq[i - 2]);
        }
        return seq;
    }

    console.log(`The first ${num} terms of Fibonacci are: ${fibonacci(num).join(", ")}`);
    process.exit();
});

//right triangle
process.stdin.on('data', input => {
  let n = parseInt(input.toString().trim());

  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }

  process.exit();
});


//inverted right triangle
process.stdin.on('data', input => {
  let n = parseInt(input.toString().trim());

  for (let i = n; i >= 1; i--) {
    console.log('*'.repeat(i));
  }

  process.exit();
});



//rectangle
process.stdin.on('data', input => {
  let values = input.toString().trim().split(" ").map(Number);
  let rows = values[0];
  let cols = values[1];

  for (let i = 0; i < rows; i++) {
    console.log('*'.repeat(cols));
  }

  process.exit();
});
