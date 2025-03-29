let darkMode = localStorage.getItem("darkMode");

if (!darkMode) {
  darkMode = "disabled";
  localStorage.setItem("darkMode", "disabled");
}

const enableDarkTheme = () => {
  $("body").attr("theme", "dark");
  $(".buttonDarkMode").attr("name", "moon-outline");
  localStorage.setItem("darkMode", "enabled");
};

const enableLightTheme = () => {
  $("body").attr("theme", "light");
  $(".buttonDarkMode").attr("name", "sunny-outline");
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkTheme();
} else {
  enableLightTheme();
}

$(".buttonDarkMode").on("click", () => {
  const current = localStorage.getItem("darkMode");
  if (current === "enabled") {
    enableLightTheme();
  } else {
    enableDarkTheme();
  }
});
