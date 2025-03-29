$(".colored-text").css("opacity", "100");
setTimeout(() => {
  $(".number")[0].style.setProperty("--num", "100");
}, 1000);

function load() {
  function preloaderSwipe() {
    setTimeout(() => {
      $("#preloader")[0].classList.add("preloader-swipe");
      $("body")[0].classList.remove("locked-body");
    }, 1250);
  }

  setTimeout(() => {
    // $(".colored-text").css("color", "var(--second)");
    preloaderSwipe();
  }, 1500);

  setTimeout(() => {
    $("#app, header, #top").addClass("active");
  }, 500);
}

load();