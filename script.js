var button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
  button.style.opacity = "1";
});

button.addEventListener("mouseout", function () {
  button.style.opacity = "0.4";
});

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset < window.innerHeight) {
    navbar.classList.remove("hide-navbar");
  } else {
    navbar.classList.add("hide-navbar");
  }
});
