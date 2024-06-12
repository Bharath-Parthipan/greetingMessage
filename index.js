

const h1 = document.getElementById("uniqe_id");
const bg = document.getElementsByClassName("bgClass");

setTimeout(() => {
    h1.innerText = 10;
}, 1000);


let count = 10;
let emojies = [
  "👀",
  "☝️",
  "✌️",
  "👌",
  "😜",
  "🖐️",
  "🖐️☝️",
  "🖐️✌️",
  "🖐️👌",
  "🕘",
  "🖐️🖐️",
];
let image = './assets/newYear.jpg';
let color = [
  "#D22D16",
  "#3b82f6",
  "#0ea5e9",
  "#dc2626",
  "#facc15",
  "#f43f5e",
  "#eab308",
  "#84cc16",
  "#a855f7",
  "#3b82f6",
  "#ef4444",
];
const interval = setInterval(() => {
    if (count != -1) {
        h1.innerText = count + " " + `${emojies[count]}`;
        h1.style.color = `${color[count]}`;
        count--;
    } else {
        h1.innerText = "❤️Happy New Year...🎉😜";
        h1.style.color = "#FFD700";
        document.body.style.backgroundImage = `url('${image}')`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        clearInterval(interval);
    }
}, 1000);