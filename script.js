const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");
}


// when we click on hamburger icon its close 

const a = document.querySelectorAll(".nav-link");

a.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    ul.classList.remove("active");
}
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