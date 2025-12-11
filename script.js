// Mostra landing dopo 4 secondi
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("landing").style.display = "block";
  document.body.style.overflow = "auto";
}, 4000);
