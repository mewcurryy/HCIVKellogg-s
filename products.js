// responsive navbar
let menu = document.getElementById('list-menu')
menu.style.maxHeight = "0rem"

function toggleMenu(){
    if(menu.style.maxHeight == "0rem"){
        menu.style.maxHeight = "50rem"
    }
    else{
        menu.style.maxHeight = "0rem"
    }
}

const filterbtn = document.querySelectorAll(".filter-btn button");
const filterableCards = document.querySelectorAll(".filter-cards .product-card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") card.classList.remove("hide");
    })
}
filterbtn.forEach(button => button.addEventListener("click", filterCards))