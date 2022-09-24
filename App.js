const input = document.getElementById("input");
const changeBtn = document.getElementById("change");
const bgColor = document.getElementById("bgColor");
const randomBtn = document.getElementById("random");

let rand = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

let value = [];

changeBtn.addEventListener("click", () => {
  console.log(input.value);
  let code = input.value;
  console.log(typeof code);
  bgColor.style.backgroundColor = `#${code}`;
});

function sixDgt() {
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * rand.length);
    let digit = rand[num];
    value.push(digit);
  }
  let gg = value.toString();
  let hh = gg.replaceAll(",", "");
  bgColor.style.backgroundColor = `#${hh}`;
  input.value = hh;
  value = [];
}

randomBtn.addEventListener("click", sixDgt);
