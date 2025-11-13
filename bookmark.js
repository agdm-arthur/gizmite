const bookmarks = [
  { name: "YouTube", url: "https://www.youtube.com/" },
  { name: "GitHub", url: "https://www.github.com/" },
  { name: "Reddit", url: "https://old.reddit.com/" },
  { name: "Wikipedia", url: "https://en.wikipedia.org/" },
  { name: "Commons", url: "https://commons.wikimedia.org/" },
  { name: "GitHub", url: "https://stackoverflow.com/" },
  { name: "Steam", url: "https://store.steampowered.com/" },
  { name: "- - -", url: "" },
  { name: "- - -", url: "" }
];

const container = document.getElementById("bookmarks");

bookmarks.forEach(bookmark => {
  const a = document.createElement("a");
  a.href = bookmark.url;
  a.textContent = bookmark.name;
  container.appendChild(a);
});