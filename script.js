const channels = [
  "MrBeast",
  "T-Series",
  "Cocomelon",
  "SET India",
  "Kids Diana Show",
  "PewDiePie",
  "Like Nastya",
  "Vlad and Niki",
  "Zee Music",
  "WWE",
  "Blackpink",
  "Justin Bieber",
  "Dude Perfect",
  "Markiplier",
  "A4",
  "Fede Vigevani",
  "Dream",
  "MrBeast Gaming",
  "Brent Rivera",
  "CarryMinati",
  "Techno Gamerz",
  "BB Ki Vines",
  "5-Minute Crafts",
  "Shemaroo",
  "Goldmines"
];

const list = document.getElementById("list");

channels.forEach((name, i) => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <span class="rank">#${i + 1}</span>
    <span>${name}</span>
  `;
  list.appendChild(div);
});
