function heitaNoppaa() {
    var noppa = document.getElementById("noppa");
    var heittoTulos = Math.floor(Math.random() * 6) + 1; // Arvotaan luku 1-6
  
    // Vaihda nopan kuvaa vastaamaan heiton tulosta
    noppa.src = "/img/" + heittoTulos + ".png";
  }
  