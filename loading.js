var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("spinner").style.display = "block";
}