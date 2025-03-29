let defaultStyle = localStorage.getItem("defaultStyle");

if (!defaultStyle) {
  defaultStyle = "disabled";
  localStorage.setItem("defaultStyle", "disabled");
}

const setAltStyle = () => {
  $("body").attr("themeing", "alt");
  $("#style ion-icon").attr("name", "brush-outline");
  localStorage.setItem("defaultStyle", "enabled");
};

const setDefaultStyle = () => {
  $("body").attr("themeing", "default");
  $("#style ion-icon").attr("name", "brush");
  localStorage.setItem("defaultStyle", "disabled");
};

if (defaultStyle === "enabled") {
  setAltStyle();
} else {
  setDefaultStyle();
}

$("#style").on("click", () => {
  const currentStyle = localStorage.getItem("defaultStyle");
  if (currentStyle === "enabled") {
    setDefaultStyle();
  } else {
    setAltStyle();
  }
});
