let back_button = document.querySelector(".back");
back_button.addEventListener("click", () => {
  window.history.back();
});

//gallery
let all_img = document.querySelectorAll(".choose");
all_img.forEach((el) => {
  el.addEventListener("click", (e) => {
    let display = document.querySelector(".display");
    display.innerHTML = "";
    el.classList.add("target");
    let current_img = document.querySelector(".target img ");

    display.style.cssText = [
      `background-image: url(${current_img.src}); background-size: cover; `,
    ];
    document.querySelector(".display-title").innerHTML = `${current_img.title}`;
    document.querySelector(".display-title").style.color = "red";
    el.classList.remove("target");
  });
});
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let new_window;
open.addEventListener("click", () => {
  new_window = window.open(
    "show-img.html",
    "",
    " left=700px,height=200px,width=200px"
  );
  new_window.document.write("<div class=\"display\"> </div>")
});
close.addEventListener("click", () => {
  new_window.close();
});
