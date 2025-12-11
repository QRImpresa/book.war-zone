// Dopo 5 secondi: sposta titolo in alto e mostra landing scrollabile
setTimeout(() => {
  const intro = document.getElementById("intro");
  intro.style.transform = "translateY(-200px)";
  intro.style.opacity = "0.8";

  setTimeout(() => {
    document.getElementById("landing").style.display = "block";
    document.body.style.overflow = "auto";
  }, 1000);

}, 4000);
