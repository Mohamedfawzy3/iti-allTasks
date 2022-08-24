
  let Num1=prompt("enter number:")
  let s1 = is_empty(Num1);
  let Num2=prompt("enter number:")
  let s2 = is_empty(Num2);
  let sum_num1=parseInt(Num1)
  let sum_num2=parseInt(Num2)
  let sum=(sum_num1+sum_num2);
  if(sum_num1==sum_num2){
     sum*=3
    document.write(`<div>the sum is:`+sum+`</div>`)
  }
  else {
    document.write(`<div>the sum is:${sum}</div>`)
  }