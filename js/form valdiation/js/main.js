let inputs_field = document.querySelectorAll("label+input");
let parent_box = document.querySelectorAll(".box");
let valid = document.querySelector("[value=validation]");
let clear = document.querySelector("[value=clear]");
function create(str) {
  let new_element = document.createElement("span");
  new_element.innerText = str;
  return new_element;
}
function empty_inputs() {
  inputs_field.forEach((el) => {
    if (el.value.length == 0) {
      el.parentElement.append(create("PLZ enter the value"));
    }
  });
}
function text_num() {
  if (
    document.querySelector("[name=user_name]").value.length < 3 &&
    document.querySelector("[name=user_name]").value != 0
  ) {
    document
      .querySelector("[name=user_name]")
      .parentElement.append(create("The name must be 3 or more"));
  }
}
function password_num() {
  if (
    document.querySelector("[name=password]").value.length < 8 &&
    document.querySelector("[name=password]").value != 0
  ) {
    document
      .querySelector("[name=password]")
      .parentElement.append(create("The pass must be 8  or more"));
  }
}
function age() {
  if (
    (document.querySelector("[name=age]").value < 16 ||
      document.querySelector("[name=age]").value > 60) &&
    document.querySelector("[name=age]").value != 0
  ) {
    document
      .querySelector("[name=age]")
      .parentElement.append(create("AGE must be (16 ~ 60)"));
  }
}
function radio() {
  let raio_el = document.querySelectorAll("[type=radio]");

  raio_el[0].checked || raio_el[1].checked == true
    ? ""
    : raio_el[0].parentElement.append(create("you must choose one"));
}
function checkbox() {
  let check_el = document.querySelectorAll("[type=checkbox]");

  check_el[0].checked || check_el[1].checked || check_el == true
    ? ""
    : check_el[0].parentElement.append(create("you must choose one at least"));
}
function check_select_tag() {
  let helper_check = "";
  helper_check = document.querySelector("select").value;
  if (helper_check == "" || helper_check == "select country") {
    document
      .querySelector("select")
      .parentElement.append(create("you must choose a country"));
  }
}

// validation button
valid.addEventListener("click", () => {
  console.log(document.querySelector("[name=password]"));
  text_num();
  password_num();
  age();
  empty_inputs();
  radio();
  checkbox();
  check_select_tag();
  email_valdiation()
});
//clear button
function Reset_selected() {
  let dropDown = document.getElementById("select-country");
  dropDown.selectedIndex = 0;
}
function Reset_checkbox() {
  document.querySelectorAll("[type=checkbox]").forEach((el) => {
    el.checked = false;
  });
}
function Reset_radio() {
  document.querySelectorAll("[type=radio]").forEach((el) => {
    el.checked = false;
  });
}
clear.addEventListener("click", () => {
  inputs_field.forEach((el) => {
    el.value = "";
  });
  Reset_checkbox();
  Reset_radio();
  Reset_selected();
  document.querySelectorAll("span").forEach((span)=>{
    span.remove();
  })
});
function email_valdiation(){
let valid_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
document.querySelector("[name=email]").value.match(valid_email)?"":document.querySelector("[name=email]").value.length==0?"":
  document.querySelector("[name=email]").parentElement.append(create("un valid email"))
}
inputs_field.forEach((el)=>{
  el.addEventListener("focus",(e)=>{
console.log( e.target.getAttribute("name"))
let current=document.querySelector(`[name=${e.target.getAttribute("name")}]`).parentElement.getAttribute("id")
console.log(document.querySelector(`#${current} span`).remove())
  })
})

  
