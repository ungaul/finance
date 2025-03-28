// Animated Header
var prevScrollpos = window.pageYOffset;

$(document).ready(function () {
  var c,
    currentScrollTop = 0;
  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = $("header").height();
    currentScrollTop = a;
    if (c < currentScrollTop && a > b + b) {
      $("header").addClass("header-hide");
    } else if (c > currentScrollTop && !(a <= b)) {
      $("header").removeClass("header-hide");
    }
    c = currentScrollTop;
  });
});

$(window).scroll(function () {
  clearTimeout($.data(this, "scrollTimer"));
  $.data(
    this,
    "scrollTimer",
    setTimeout(function () {
      $("header").removeClass("header-hide");
    }, 750)
  );
});

$("#menu")[0].click(function () {});

// $("#style").click(function () {
//   if ($("body").css("background") === "rgb(15, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box") {
//     $(":root").css({ "--article-text-color": "#ce0b46" });
//     $("#logo, #preloader-logo").css({ "filter": "brightness(10) hue-rotate(85deg)" });
//   }
// });

// $("#style").click(function () {
//   $(":root").css({ "--article-text-color": "#ce0b46" });
//   $("#logo, #preloader-logo").css({ filter: "brightness(10) hue-rotate(87deg)" });
//   console.log("samarch");
// });
