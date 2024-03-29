let equal_pressed = 0;
let button_input = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }

    input.value += button_class.value;
  });
});

equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
      let solution = eval(inp_val);
      if (Number.isInteger(solution)) {
        input.value = solution;
      } else {
        input.value = parseFloat(solution.toFixed(8)).toString();
      }
    } catch (err) {
      input.value = "Invalid Input!!";
    }
  });
  

erase.addEventListener("click", () => {
  input.value = "";
});
