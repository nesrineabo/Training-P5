const cartContainer = document.querySelector(".cart-overlay");
const productList = document.querySelector(".products-center");
const cartList = document.querySelector(".cart-content");
const cartCountInfo = document.querySelector(".cart-items");

const cartOverlay = document.querySelector(".cart-overlay");
//const addToCart = document.querySelector(".addToCart");
const closeCart = document.querySelector(".close-cart");

// Fermer le Panier Overlay au clic sur la croix
closeCart.addEventListener("click", () => {
  cartOverlay.classList.add("mask-response");
  console.log("Tu as réussi à me fermer ! bravo à toi Nes !^^");
});

let cartItemID = 1;

eventListeners();

// Tous les Event Listeners ici
function eventListeners() {
  window.addEventListener("DOMContentLoaded", () => {
    loadJSON();
  });

  //afficher l'overlay
  // document.querySelector(".cart-btn").addEventListener("click", () => {
  //   window.location.href = "cart.html";
  // });

  //ajouter au panier
  //productList.addEventListener("click", purchaseProduct);
}

// Chargement des produits depuis le fichier JSON localhost

function loadJSON() {
  fetch("http://localhost:3000/api/furniture")
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((product) => {
        //console.log(product); on a bien nos produits dans notre console.
        let productPrice = product.price / 100; // variable prix pour le diviser par 100
        html += `
            <article class="product">
                <div class="img-container" id="productImg">
                    <img src="${product.imageUrl}" alt="${
          product.name
        }" class="product-img" />
                        <button class="bag-btn" data-id="1">
                            <i class="fas fa-shopping-cart"></i>
                            Ajouter au Panier
                        </button>
                </div>
                <h3 id="productName">${product.name}</h3>
                <h4 id="productPrice">${productPrice.toFixed(2)} €</h4>
                <a href="singleProduct.html?id=${product._id}">
                <button class="more-info">Plus d'informations</button>
                </a>
            </article>
        `;
      });
      productList.innerHTML = html;
    });
  // .catch(error => {
  //     alert("Utiliser live Server ou local server");
  //     console.log("Hu ho y'a une erreur :/");
  //   });
}

// // ------------------- TEST AJOUT PANIER 1 ------------------------------

// // AJOUT AU PANIER
// function purchaseProduct(e) {
//   //console.log(e.target); On voit bien sur quoi on a cliqué
//   if (e.target.classList.contains("bag-btn")) {
//     //console.log(e.target); On ne cible QUE le bouton qui s'afficher "ajouter au panier"
//     let product = e.target.parentElement.parentElement;
//     //console.log(product);On récupère les données complètes du produit
//     getProductInfo(product);
//   }
// }

// // Récupération des informations du produit après click sur "ajouter au panier"
// function getProductInfo(product) {
//   let productInfo = {
//     id: cartItemID,
//     image: product.imageUrl,
//     name: product.querySelector("#productName").textContent,
//     //    varnish: varnishElt.nodeValue,
//     //    quantity: quantityElt.nodeValue,
//     //    totalPrice: (product.price * parseInt(quantityElt.value)) / 100,
//     //    price: product.price / 100,
//     price: product.querySelector("#productPrice").textContent,
//   };
//   cartItemID++;
//   console.log(productInfo); //On a nos informations quand on clique sur "ajouter au panier" + On a le nombre de items qui change
//   //addToCartList(productInfo);
//   //saveProductInStorage(productInfo);
// }

// // // Ajouter le produit sélectionné dans la liste du panier
// // function addToCartList(product) {
// //   const cartItem = document.createElement("div");
// //   cartItem.classList.add("cart-item");
// //   cartItem.setAttribute("data-id", `${product._id}`);
// //   cartItem.innerHTML = `
// //         <img src="${product.imageUrl}" alt="Produit" />
// //             <div>
// //                 <h4>${product.name}</h4>
// //                 <h5>${product.price}</h5>
// //                 <span class="remove-item">Supprimer</span>
// //             </div>

// //             <div>
// //                 <i class="fas fa-chevron-up"></i>
// //                 <p class="item-amount">1</p>
// //                 <i class="fas fa-chevron-down"></i>
// //             </div>
// //     `;
// //   cartList.appendChild(cartItem);
// // }

// // // Sauvegarger les produits dans un local storage
// // function saveProductInStorage(item) {
// //   let products = getProductFromStorage();
// //   console.log(products);
// // }

// // // Récupérer toutes les infos des produits s'il y en a dans le local storage
// // function getProductFromStorage() {
// //   return localStorage.getItem("products")
// //     ? JSON.parse(localStorage.getItem("products"))
// //     : [];
// //   // ca nous retourne un tableau vide s'il n'y a pas de produit
// // }

// // ------------------- TEST AJOUT PANIER 2 ------------------------------
