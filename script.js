function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }