let leftBox = document.querySelector(".left-panel");
let rightBox = document.querySelector(".right-panel");
let portfolio = document.querySelector(".portfolio");

let scene = gsap.timeline();

scene.from(".anim1", {
  opacity: 0,
  duration: 1,
  y: "-50",
  ease: "back.out(2.5)",
  stagger: 0.6,
});

scene.from(
  rightBox, {
    autoAlpha: 0,
    duration: 4,
  },
  "-=2.5"
);

scene.from(
  ".icon", {
    duration: 1,
    opacity: 0,
    x: "-25",
    autoAlpha: 0,
    stagger: 0.1,
  },
  "-=2.5"
);

scene.from(".scroll-icon", {
  duration: 0.5,
  opacity: 0,
  autoAlpha: 0,
  stagger: 0.1,
});


let controller = new ScrollMagic.Controller();

// let scrollScene = new ScrollMagic.Scene({
//     triggerElement: portfolio,
//     duration: 0
//   })
//   .setClassToggle(".row", "visible")
//   .addIndicators()
//   .setPin(portfolio)
//   .addTo(controller);


var revealElements = document.getElementsByClassName("row");
for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
      triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
      offset: 50, // start a little later
      triggerHook: 0.9,
    })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    // .addIndicators({
    //   name: "row " + (i + 1)
    // }) // add indicators (requires plugin)
    .addTo(controller);

}