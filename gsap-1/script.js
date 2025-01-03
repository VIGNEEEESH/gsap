let tl = gsap.timeline();
// gsap.to("#box1", {
//   x: 1000,
//   duration: 3,
//   delay: 1,
//   rotate: 360 * 2,
//   //   repeat: 1, // repeats the animation
//   //   repeat:-1 // repeats infinitenumber of times
//   //   yoyo: true, // repeats forward and backward
// });
// gsap.to("#box2", {
//   x: 1000,
//   duration: 2,
//   //   delay: 4,
//   borderRadius: "50%",
//   rotate: 360,
//   scale: 0.5,
// });
// gsap.from("h1", {
//   y: 40,
//   opacity: 0,
//   delay: 1,
//   duration: 1,
//   stagger: 1,
//   //   stagger: -1, //reverse
// });

tl.from("h2", {
  opacity: 0,
  duration: 0.5,
  y: -30,
});
tl.from("h4", {
  opacity: 0,
  duration: 0.5,
  y: -30,
  stagger: 0.2,
});
tl.from("h1", {
  opacity: 0,
  duration: 1,
  y: 20,
  scale: 0.2,
});
