const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.08,
});

const page2 = document.querySelector("#page2");
const elem = document.querySelectorAll("#elem");
elem.forEach((e) => {
  e.addEventListener("mouseover", function () {
    const bgimg = e.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
});

let tl = gsap.timeline();

tl.to("#yellow1", {
  top: "-100%",
  delay: 0.5,
  ease: "expo.out",
  duration: 1,
});
tl.from(
  "#yellow2",
  {
    top: "100%",
    delay: 0.2,
    ease: "expo.out",
    duration: 0.6,
  },
  "anim"
);
tl.to(
  "#loader h1",
  {
    opacity: 0,
    color: "#ffffff",
  },
  "anim"
);
tl.to("#loader", {
  opacity: 0,
  display: "none",
});
tl.to("#page1 h1 span", {
  opacity: 1,
  delay: 0.3,
  duration: 0.5,
  stagger: 0.2,
});
tl.to(
  "#myname",
  {
    color: "#88C273",
  },
  "same"
);
tl.to(
  "#nav ul i",
  {
    delay: 0,
    rotate: "180",
  },
  "same"
);
tl.to("#nav ul", {
  columnGap: "40px",
});
tl.to("#nav ul a", {
  duration: 0.2,
  stagger: 0.1,
  opacity: 1,
});

const plus = document.getElementById("plus-icon");
const menu = document.getElementsByClassName("mobile-menu");

plus.addEventListener("click", () => {
  menu.style.display = "block";
});
