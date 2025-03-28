const styletoggle = $("#style");
const chosenStyle = $("#stylestylesheet");
let defaultStyle = localStorage.getItem("defaultStyle");

const altStyle = () => {
  styletoggle.html("<ion-icon name='brush-outline'></ion-icon>");
  chosenStyle.attr("href", "assets/css/style-alt.css");
  localStorage.setItem("defaultStyle", "enabled");
};

const setDefaultStyle = () => {
  styletoggle.html("<ion-icon name='brush'></ion-icon>");
  chosenStyle.attr("href", "");
  localStorage.setItem("defaultStyle", "disabled");
};

const toggleStyle = () => {
  defaultStyle = localStorage.getItem("defaultStyle");
  if (defaultStyle === "disabled") {
    altStyle();
  } else {
    setDefaultStyle();
  }
};

if (defaultStyle === "enabled") {
  altStyle();
} else {
  setDefaultStyle();
}

styletoggle.on("click", toggleStyle);
