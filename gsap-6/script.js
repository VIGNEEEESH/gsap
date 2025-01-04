const breakText = () => {
  var h1 = document.querySelector("h1");
  var h1text = h1.textContent;
  var splittedText = h1text.split("");
  var clutter = "";
  var halfValue = Math.floor(splittedText.length / 2);
  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
      console.log(clutter);
    } else {
      clutter += `<span class="b">${elem}</span>`;
      console.log(clutter);
    }
  });
  h1.innerHTML = clutter;
};

breakText();
gsap.from("h1 .a", {
  y: 50,
  duration: 0.5,
  delay: 0.3,
  opacity: 0,
  stagger: 0.2,
});
gsap.from("h1 .b", {
  y: 50,
  duration: 0.5,
  delay: 0.3,
  opacity: 0,
  stagger: -0.2,
});
