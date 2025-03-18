let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
});

const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
}



const a = document.querySelectorAll(".nav-link");

a.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
};
        function searchProduct() {
            const searchInput = document.getElementById('searchBar').value.toLowerCase();
            const products = document.getElementById('productList').getElementsByTagName('a');

            for (let i = 0; i < products.length; i++) {
                const product = products[i].textContent.toLowerCase();
                if (product.indexOf(searchInput) > -1) {
                    products[i].style.display = "";
               
                  } else {
                    
                  products[i].style.display = "none";
                }
            }
        }
    function Sec1() {
    var Sec1 = document.getElementById("Sec1");


    if (Sec1.style.display === "none") {
      Sec1.style.display = "block";
    } else {

      Sec1.style.display = "none";
    }
  };
  function poster1() {
    var poster1 = document.getElementById("poster1");


    if (poster1.style.display === "none") {
      poster1.style.display = "block";
    } else {

      poster1.style.display = "none";
    }
  };
  function poster2() {
    var poster2 = document.getElementById("poster2");


    if (poster2.style.display === "none") {
      poster2.style.display = "block";
    } else {

      poster2.style.display = "none";
    }
  }; function poster3() {
    var poster3 = document.getElementById("poster3");


    if (poster3.style.display === "none") {
      poster3.style.display = "block";
    } else {

      poster3.style.display = "none";
    }
  };

