import "./style.css";

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
