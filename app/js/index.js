const tcLink = document.getElementById("tc-link");
const tcHr = document.getElementById("tc-hr");
const tcArrow = document.getElementById("tc-arrow");

function white(x) {
  tcLink.style.color = "#FFFFFF";
  tcHr.style.color = "#FFFFFF";
  tcArrow.style.fill = "#FFFFFF";
}

function cyan(x) {
  tcLink.style.color = "hsl(176, 68%, 64%)";
  tcHr.style.color = "hsl(176, 68%, 64%)";
  tcArrow.style.fill = "hsl(176, 68%, 64%)";
}
