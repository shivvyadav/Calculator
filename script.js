let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let formCalc = document.querySelector(".formCalc");

formCalc.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (e.target.classList.contains("btn")) {
      if (e.target.value == "AC") {
        display.value = "";
      } else if (e.target.value == "DE") {
        display.value = display.value.slice(0, -1);
      } else if (e.target.value == "=") {
        display.value = eval(display.value);
      } else {
        display.value += e.target.value;
      }
    }
  } catch (err) {
    console.log(err);
  }
});
