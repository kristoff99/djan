let down = document.querySelector(".scroll-icon");

down.addEventListener("click", () =>
  window.scrollTo({
    top: 350,
    behavior: "smooth",
  })
);