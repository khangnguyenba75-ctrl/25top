const channels = [
  { name: "MrBeast", subs: 503000000 },
  { name: "T-Series", subs: 313000000 },
  { name: "Cocomelon", subs: 201000000 },
  { name: "SET India", subs: 180000000 },
  { name: "Kids Diana Show", subs: 125000000 },
  { name: "PewDiePie", subs: 111000000 },
  { name: "Like Nastya", subs: 110000000 },
  { name: "Vlad and Niki", subs: 108000000 },
  { name: "Zee Music", subs: 105000000 },
  { name: "WWE", subs: 102000000 }
];

// sort rank
channels.sort((a,b) => b.subs - a.subs);

const list = document.getElementById("list");
const status = document.getElementById("status");

// simulate checking
setTimeout(() => {
  status.innerText = "Updated ✔";
}, 2000);

function render() {
  list.innerHTML = "";

  channels.forEach((c, i) => {
    const div = document.createElement("div");
    div.className = "item";

    // highlight top passer (top 3)
    if (i < 3) {
      div.classList.add("topper");
    }

    div.innerHTML = `
      <span class="rank">#${i + 1}</span>
      <span>${c.name}</span>
      <span class="odometer">${c.subs}</span>
    `;

    list.appendChild(div);
  });

  // animate odometer
  document.querySelectorAll(".odometer").forEach(el => {
    new Odometer({
      el: el,
      value: el.innerText
    });
  });
}

render();

// simulate subscribe increase
setInterval(() => {
  channels.forEach(c => {
    c.subs += Math.floor(Math.random() * 10000);
  });

  channels.sort((a,b) => b.subs - a.subs);
  render();
}, 3000);
