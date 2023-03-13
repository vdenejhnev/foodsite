const navLinks = $(".food-nav__menu-link");
const categories = $(".menu-list");
const mavMenu = $(".food-nav");
const containerOuterWidth = $(".food-nav__menu").outerWidth();

var currentLink = null;
var isClicked = false;

function toggleMenuLink(link) {
  navLinks.removeClass("active-category");
  if (!!link) {
    if (!!link.classList) {
      link.classList.add("active-category");
    } else {
      link.addClass("active-category");
    }
  }
}

$(document).ready(() => {
  $(this).scroll(() => {
    for (let i = 0; i < categories.length; i++) {
      const top = categories[i].getBoundingClientRect().top;
      if (top > 0 && top < 75 && !isClicked) {
        if (currentLink !== navLinks[i]) {
          toggleMenuLink(navLinks[i]);
          scrollToCategory(navLinks[i], 120);
          currentLink = navLinks[i];
        }
      }
    }
  });
});

function scrollToCategory(category, duration) {
  var itemOffsetLeft = category.getBoundingClientRect().left;
  var containerScrollLeft = $(".food-nav__menu").scrollLeft();
  var scrollLeftUpd = Math.abs(containerScrollLeft + itemOffsetLeft - 10);
  $(".food-nav__menu").animate(
    {
      scrollLeft: scrollLeftUpd,
    },
    +duration
  );
}

$("a.food-nav__menu-link").click(function () {
  toggleMenuLink();
  scrollToCategory($(this)[0], 600);
  toggleMenuLink();
  isClicked = true;
  currentLink = $(this)[0];

  setTimeout(() => {
    toggleMenuLink();
    toggleMenuLink($(this));
    isClicked = false;
  }, 600);
});
