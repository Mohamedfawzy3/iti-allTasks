function get_name() {
  let f_name = prompt("Tell me your first name:");
  let f = is_empty(f_name);
  let L_name = prompt("Tell me your last name:");
  let l = is_empty(L_name);
  function is_empty(tester) {
    if (tester == null) {
      while (tester == null) {
        tester = prompt("you must enter your the name:");
      }
    } else {
      while (tester.length === 0) {
        tester = prompt("you must enter your the name:");
      }
    }
    return tester;
  }
  document.write(`<u>Hello ${f.concat(` ${l}`)}</u>`);
}
get_name();
function check() {
  let return_value;
  let gussed_num = Math.ceil(Math.random() * 10);
  let i = 0;
  while (i < 3) {
    return_value = prompt("guess the number /* " + gussed_num + " */");
    if (return_value == gussed_num) {
      document.write("<h3>congratulation number is correct.</h3>");
      i = 4;
    } else {
      i++;
      if (i == 3) {
        document.write(
          "<h4>hard luck the correct number is: " + gussed_num + "</h4>"
        );
      }
    }
  }
}
check();
