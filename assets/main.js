// Stiky Menu
// $(document).ready(function($){
// 	var nav = $('.food-nav');
// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 100) {
// 			nav.addClass("fixed");
// 		} else {
// 			nav.removeClass("fixed");
// 		}
// 	});
// });

$(document).ready(function () {
  var element = $(".food-nav");
  var height_el = element.offset().top;

  // $(".food-nav").css({
  //     "width": element.outerWidth(),
  //     "height": element.outerHeight()
  // });

  $(window).scroll(function () {
    if ($(window).scrollTop() > height_el) {
      element.addClass("fixed");
    } else {
      element.removeClass("fixed");
    }
  });
});

// Smoose Scroll
$('a[href*="#"]').on("click", function () {
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 50,
    },
    600
  );
  return false;
});

// Modal Window
$(function () {
  $(".open").click(function () {
    $(".modal").addClass("active");
    $(".modal-overlay").addClass("active");
    $("body").addClass("lock");
  });

  $(".modal__close-button").click(function () {
    $(".modal").removeClass("active");
  });
});
$(".modal").mouseup(function (e) {
  let modalContent = $(".modal-form");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $(this).removeClass("active");
    $(".modal-overlay").removeClass("active");
    $("body").removeClass("lock");
  }
});
// End Modal Window

