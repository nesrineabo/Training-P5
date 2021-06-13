const cartOverlay = document.querySelector(".cart-overlay");
const addToCart = document.querySelector(".addToCart");
const closeCart = document.querySelector(".close-cart");

// Afficher le Panier Overlay au clic sur "Ajouter au panier"
addToCart.addEventListener("click", () => {
  cartOverlay.classList.add("show-response");
  console.log("Je te vois !");
});

// Fermer le Panier Overlay au clic sur la croix
closeCart.addEventListener("click", () => {
  cartOverlay.classList.add("mask-response");
});

// est-ce qu'on peut faire "afficher panier overlay si "ajouter au panier" est cliqué" ?
