let defaultStyle = localStorage.getItem("defaultStyle");

if (!defaultStyle) {
  defaultStyle = "disabled";
  localStorage.setItem("defaultStyle", "disabled");
}

const setAltStyle = () => {
  $("#style").html("<ion-icon name='brush-outline'></ion-icon>");
  $("body").attr("themeing", "alt");
  localStorage.setItem("defaultStyle", "enabled");
};

const setDefaultStyle = () => {
  $("#style").html("<ion-icon name='brush'></ion-icon>");
  $("body").attr("themeing", "");
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
