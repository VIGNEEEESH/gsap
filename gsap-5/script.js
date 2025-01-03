var tl = gsap.timeline();
var sidenav = document.querySelector("#sidenav");
var menu = document.querySelector("#nav i");
var closeMenu = document.querySelector("#sidenav i");

tl.to("#sidenav", {
  right: 0,
  duration: 0.4,
});
tl.from("#sidenav h4", {
  x: 100,
  duration: 0.4,
  stagger: 0.2,
  opacity: 0,
});
tl.from("#sidenav i", {
  opacity: 0,
});
tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
closeMenu.addEventListener("click", function () {
  tl.reverse();
});
