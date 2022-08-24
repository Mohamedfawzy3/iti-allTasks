let num1=prompt("Enter the first num:") 
let n1 = is_empty(num1);
let num2=prompt("Enter the second num:")
let n2 = is_empty(num2);
if(parseInt(num1)>parseInt(num2)){
    document.write(`<h2>${num1} is the biggest</h2>`)
}
else if(parseInt(num2)>parseInt(num1)){
    document.write(`<h2>${num2} is the biggest</h2>`)
}
else if(parseInt(num1)==parseInt(num2)){
    document.write(`<h2>two numbers are equal</h2>`)
}
function is_empty(tester) {
    if (tester == null) {
      while (tester == null) {
        tester = prompt("you must enter a value:");
      }
    } else {
      while (tester.length === 0) {
        tester = prompt("you must enter a value:");
      }
    }
    return tester;
  }
  