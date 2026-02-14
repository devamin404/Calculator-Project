let display = document.querySelector('input[name="display"]');
let buttons = document.querySelectorAll(".btn");

for (let btn of buttons) {
  btn.addEventListener("click", function (e) {
    if (e.target.value === "AC") {
      display.value = "";
    } else if (e.target.value === "DE") {
      display.value = display.value.toString().slice(0, -1);
    } else if (e.target.value === "=") {
      display.value = eval(display.value);
    } else {
      display.value += e.target.value;
    }
  });
}
