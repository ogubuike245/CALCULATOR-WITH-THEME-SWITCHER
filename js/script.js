let slider = document.getElementById("themeSwitcher");

// FIXME: THEME SWITCHER

// FUNCTION TO SET A GIVEN THEME
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// SET THEME ON RELOAD FROM LOCAL STORAGE
(function () {
  let Theme = localStorage.getItem("theme");
  if (Theme === null) return setTheme("theme-one") && (slider.value = 1);
  setTheme(Theme);

  if (Theme === "theme-one") return (slider.value = 1);

  if (Theme === "theme-two") return (slider.value = 2);

  if (Theme === "theme-three") return (slider.value = 3);
})();

// THEME SELECTION BY CLICKING ON THUMB OF INPUT RANGE TYPE
function SelectTheme() {
  const theme = slider.value;
  switch (theme) {
    case "1":
      setTheme("theme-one");
      break;
    case "2":
      setTheme("theme-two");
      break;
    case "3":
      setTheme("theme-three");
      break;
  }
}

// THEME SELECTION BY CLICKING ON NUMBERS ABOVE INPUT RANGE TYPE
document.querySelectorAll("p").forEach(function (item) {
  item.addEventListener("click", function () {
    slider.value = item.innerHTML;
    SelectTheme();
    console.log(item.innerHTML);
  });
});

// TODO: DISPLAY INPUTTED DIGIT

function display(number) {
  let variable = number.toString();
  document.getElementById("displayArea").value += variable;
  let StringVariable = parseFloat(variable.split(".")[0]);

  // f = new Intl.NumberFormat("en-us");
  // console.log(f.format(Variable));

  console.log(StringVariable);

  return StringVariable.toLocaleString("en");
}

//FIXME: ADD CALCULATION FUNCTIONS

// TODO: EQUALS
function solve() {
  displayArea = document.getElementById("displayArea").value;
  if (displayArea == "") {
    //TODO: SET UP PROPER NOTIFICATION BOX
    alert("empty BOX");
  } else {
    let Variable = eval(document.getElementById("displayArea").value);
    document.getElementById("displayArea").value = Variable;

    return Variable;
  }
}

// TODO: RESET
function clearScreen() {
  document.getElementById("displayArea").value = "";
}

//TODO: DELETE
function backSpace() {
  displayArea.value = displayArea.value.slice(0, -1);
}
// TODO: ADD ANIMATIONS WHEN BUTTON IS CLICKED
