const button = document.querySelector("button")!;
// bang operator declares that a value will not be null.
// "as <thing>" declares what it is, in this case it is the input boxes. This is typecasting
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// On a param ": <type>" typecasts the param data
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
    // the "+" typecasts the arg as a number
  console.log(add(+input1.value, +input2.value));
});
