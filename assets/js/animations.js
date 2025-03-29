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

  setTimeout(() => {
    $("#disclaimer-container").removeClass("active");
  }, 8000);
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

$(document).ready(function () {
  const headings = $('h3, h4, h5, h6');
  headings.each(function () {
    const $heading = $(this);
    const tag = $heading.prop('tagName').toLowerCase();
    const text = $heading.text();

    const $entry = $('<div></div>')
      .addClass('menu-item menu-' + tag)
      .append($('<span></span>')
        .addClass('menu-text')
        .text(text))
      .on('click', function () {
        $('html, body').animate({
          scrollTop: $heading.offset().top
        }, 400);
      });

    $('#menu-container').append($entry);
  });

  $("#menu").click(function () {
    $("#menu-container").toggleClass("active");
  });

  $('#url').on('click', function () {
    navigator.clipboard.writeText(window.location.href);
    $(this).find('ion-icon').attr('name', 'checkmark-outline');
  });

  $('.table').each(function () {
    const $table = $(this);
    const rows = $table.find('.row');
    const sizeAttr = $table.attr('data-size');
    if (!sizeAttr) return;
    const sizes = sizeAttr.split('-').map(v => v.trim() + '%');
    rows.css('display', 'flex');
    rows.each(function () {
      $(this).find('.cell').each(function (i) {
        if (sizes[i]) {
          $(this).css('width', sizes[i]);
        }
      });
    });
  });
});


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
