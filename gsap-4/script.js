var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");
main.addEventListener("mousemove", function (dets) {
  gsap.from(cursor, {
    x: dets.x - 9,
    y: dets.y - 10,
  });
});
image.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View more";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#11111140",
  });
});
image.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
