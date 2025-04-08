var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("spinner").style.display = "block";
};
const popup = document.getElementById("popup");
const content = document.getElementById("content");
const okButton = document.getElementById("okButton");
okButton.addEventListener("click", function() {
    popup.style.display = "none";
    content.style.display = "block";
});