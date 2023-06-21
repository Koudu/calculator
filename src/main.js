import "./style.css";

let first = "";
let second = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  let first = "";
  let second = "";
  let sign = "";
  let finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick ;

document.querySelector(".button").onclick = (event) => {
  if(!event.target.classList.contains("btn")) return;
  if(event.target.classList.contains("ac")) return;
  out.textContent = "";
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if(second === "" && sign === ""){
      first+=key;
      console.log(first, second, sign);
      out.textContent = first;
    }

    else if (first!=="" && second!=="" && finish){
      // second = key;
      // finish = false;
      // out.textContent = second;
    }

    else{
      second += key;
      out.textContent = second;
    }
    console.table(first, second, sign);
    return;
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(sign);
    return;
  }

  if (key === "=") {
    if (second === "") second = first;
    switch(sign) {
      case "+":
        first = (+first) + (+second);
        break;
      case "-":
        first = first - second;
        break;
      case "x":
        first = first * second;
        break;
      case "/":
        if (second === 0) {
          out.textContent = "Ошибка";
          first = "";
          second = "";
          sign = "";
          return;
        }
        first = first / second;
        break;
    }
    finish = true;
    out.textContent = first;
    console.table(first, second, sign);
  }
};

const body = document.querySelector("body");
const settingsPanel = document.getElementById("settings-panel");

body?.addEventListener("click", (e) => {
  const name = e.target.getAttribute("name");
  if (name === "settings-btn" && settingsPanel) {
    if (settingsPanel?.classList.contains("_inactive")) {
      settingsPanel.classList.remove("_inactive");
      settingsPanel.classList.add("_active");
      return;
    }
    settingsPanel.classList.add("_inactive");
    settingsPanel.classList.remove("_active");
  }
  console.log(name);
  if (name === "light-theme-btn") {
    document.querySelectorAll(".dark-them").forEach((el) => {
      el.classList.remove("dark-them");
      el.classList.add("light-them");
    });
  }
  if (name === "dark-theme-btn") {
    document.querySelectorAll(".light-them").forEach((el) => {
      el.classList.remove("light-them");
      el.classList.add("dark-them");
    });
  }
});


// const arr=[8, 1,4, 11, 7,9, 9];
// console.log(arr.sort((a, b) => a - b));

// const arrToSet = new Set(arr);
// console.log(arrToSet);

// const setToArr = [...arrToSet]

// const btn = document.getElementById("bt-1");
// const btn2 = document.getElementById("bt-2");
// const dialog = document.querySelector(".dialog");
// //console.log(btn);

// function click(e) {
//     const input = document.getElementById("text");
//     const text = document.getElementById("dialog-text");
//     if (dialog && text) {
//         text.innerHTML = input.value;
//         dialog.classList.add("active");
//     }
// }

// btn.addEventListener("click", click)
// btn2?.addEventListener("click", () => {
//     dialog?.classList.remove("active");
// })
