let numer=prompt("enter a number to check it:")
let return_num = is_empty(numer);
let odd_even=parseInt(numer)
if(odd_even%2==0){
  document.write("the numer is odd")
}
else{
    document.body.append(document.createElement("div").innerText("The num is even"))
}