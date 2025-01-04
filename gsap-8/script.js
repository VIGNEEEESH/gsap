var tl = gsap.timeline();
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#services h3",
    scroller: "body",

    start: "top 50%",
    end: "top 60%",
    scrub: 2,
  },
});

const page1Animation = () => {
  tl.from("nav #logo, nav h4, nav button", {
    y: -30,
    duration: 0.4,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(
    "#center-part1 h1, #center-part1 p",
    {
      x: -300,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.4"
  );
  tl.from("#center-part1 button", {
    opacity: 0,
    duration: 0.5,
  });
  tl.from(
    "#center-part2",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.8"
  );
};

const page2Animation = () => {
  tl2.from("#services", {
    opacity: 0,
    y: 30,
    duration: 1,
  });
  // line 1
  tl2.from(
    ".elem.line1.left",
    {
      x: -100,
      opacity: 0,
      diration: 1,
    },
    "anim1"
  ),
    tl2.from(
      ".elem.line1.right",
      {
        x: 100,
        opacity: 0,
        diration: 1,
      },
      "anim1"
    );
  // line 2
  tl2.from(
    ".elem.line2.left",
    {
      x: -100,
      opacity: 0,
      diration: 1,
    },
    "anim2"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 100,
      opacity: 0,
      diration: 1,
    },
    "anim2"
  );
};
const footerAnimation = () => {
  tl.from("#logoBottom i", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: 0.2,
  });
};
page1Animation();
page2Animation();

footerAnimation();
