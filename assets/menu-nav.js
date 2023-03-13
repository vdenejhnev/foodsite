const navLinks = Array.from(document.querySelectorAll(".food-nav__menu-link"));
const categories = Array.from(document.querySelectorAll(".menu-list"));
const navMenu = document.querySelector(".food-nav");
const containerOuterWidth = $(".food-nav__menu").outerWidth();

function toggleMenuLink(link) {
  navLinks.forEach((element) => element.classList.remove("active-category"));
  if (!!link){
    link.classList.add("active-category");
  }
  
}

document.addEventListener("scroll", () => {
  categories.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if ((top > 0) & (top <75)) {
      toggleMenuLink(navLinks[categories.indexOf(element)]);
    }
  });
});

$("a.food-nav__menu-link").click(function () {
  var itemOffsetLeft = $(this).offset().left;
  var containerScrollLeft = $(".food-nav__menu").scrollLeft();

  var scrollLeftUpd = Math.abs(containerScrollLeft + itemOffsetLeft - 10);

  $(".food-nav__menu").animate(
    {
      scrollLeft: scrollLeftUpd,
    },
    400
  );

  setTimeout(() => {
    toggleMenuLink($(this)[0]);
  }, 1000);
});