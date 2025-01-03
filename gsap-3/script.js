var initial_path = "M 100 100 Q 650 100 1200 100";
var final_path = "M 100 100 Q 650 100 1200 100";
var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  path = `M 100 100 Q ${dets.x} ${dets.y} 1200 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    smooth: 2,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: initial_path },
    duration: 1,
    ease: "elastic.out(1,0.2)",
  });
});
