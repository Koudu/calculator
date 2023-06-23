import "./style.css";

window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.register("./sw.js");
      console.log("Service worker register success", reg);
    } catch (e) {
      console.log("Service worker register fail");
    }
  }
});

let first = "";
let second = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  first = "";
  second = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

function finishCalc() {
  second = "";
  sign = "";
}

function PlusMinus() {
  if (second) {
    second = `${Number(second) * -1}`;
    out.textContent = second;
    return;
  }
  if (sign) {
    return;
  }
  if (first) {
    first = `${Number(first) * -1}`;
    out.textContent = first;
  }
}

function clearDigit(nmbr) {
  let result = nmbr.slice(0, nmbr.length - 1);
  result = result === "-" ? "" : result;
  return result;
}

function clearBack() {
  if (second !== "") {
    second = clearDigit(second);
    out.textContent = second === "" ? sign : second;
    return;
  }
  if (sign !== "") {
    sign = "";
    out.textContent = first;
    return;
  }
  if (first !== "") {
    first = clearDigit(first);
    out.textContent = first === "" ? 0 : first;
    return;
  }
  out.textContent = 0;
}

function addDigit(origin, newChar) {
  if (origin.length >= 7) {
    return origin;
  }
  return origin + newChar;
}

function calculate(event) {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (second === "" && sign === "") {
      first = addDigit(first, key);
      console.log(first, second, sign);
      out.textContent = first;
    } else {
      second = addDigit(first, key);
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
    const firstDigit = Number(first);
    const secondDigit = Number(second);
    switch (sign) {
      case "+":
        first = `${firstDigit + secondDigit}`;
        finishCalc();
        break;
      case "-":
        first = `${firstDigit - secondDigit}`;
        finishCalc();
        break;
      case "x":
        first = `${firstDigit * secondDigit}`;
        finishCalc();
        break;
      case "/":
        if (second === 0) {
          out.textContent = "Ошибка";
          first = "";
          second = "";
          sign = "";
          return;
        }
        first = `${firstDigit / secondDigit}`;
        finishCalc();
        break;
      default:
        break;
    }
    finish = true;
    out.textContent = first;
    console.table(first, second, sign);
  }
}

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
    return;
  }
  if (name === "light-theme-btn") {
    document.querySelectorAll(".dark-them").forEach((el) => {
      el.classList.remove("dark-them");
      el.classList.add("light-them");
    });
    return;
  }
  if (name === "dark-theme-btn") {
    document.querySelectorAll(".light-them").forEach((el) => {
      el.classList.remove("light-them");
      el.classList.add("dark-them");
    });
    return;
  }
  
  if (name === "watch-btn") {
    document.querySelectorAll(".calc__content").forEach((el) => {
      if (el.classList.contains("_time")) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  }

  if (name === "normal-btn") {
    document.querySelectorAll(".calc__content").forEach((el) => {
      if (el.classList.contains("_default")) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });
  }

  if (name === "del") {
    clearBack();
    return;
  }
  if (name === "ac") {
    clearAll();
    return;
  }

  if (name === "+/-") {
    PlusMinus();
    return;
  }
  calculate(e);
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
