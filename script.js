window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const fechaEstreno = new Date("June 16, 2026 00:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const distancia = fechaEstreno - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    document.getElementById("contador").innerHTML =
        "Faltan " + dias + " días";

},1000);