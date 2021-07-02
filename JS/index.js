const cartOverlay = document.querySelector(".cart-overlay");
const addToCart = document.querySelector(".addToCart");
const closeCart = document.querySelector(".close-cart");

// Afficher le Panier Overlay au clic sur "Ajouter au panier"
// addToCart.addEventListener("click", () => {
//   cartOverlay.classList.add("show-response");
//   console.log("Je te vois !");
// });

// Fermer le Panier Overlay au clic sur la croix
// closeCart.addEventListener("click", () => {
//   cartOverlay.classList.add("mask-response");
//   console.log(
//     "je suis cliqué, et tu as réussi à me fermer ! bravo à toi Nes !^^"
//   );
// });

// est-ce qu'on peut faire "afficher panier overlay si "ajouter au panier" est cliqué" ?

const productsDOM = document.querySelector(".products-center"); // déclaration de la constante où s'afficheront mes prduits

fetch("http://localhost:3000/api/furniture") //Récupération des données sur l'url de l'API
  .then((response) => {
    // me renvoie un premiere promesse
    if (response.ok) {
      return response.json(); // Si response ok, retourne un objet json
    } else {
      Promise.reject(response.status); // sinon, me retourne la cause de l'échec
    }
  })

  .then((data) => {
    // si response ok, renvoi d'une seconde promesse
    data.forEach((produit) => {
      //console.log(produit);
      // boucle pour générer dynamiquement du HTML dans le DOM

      let productPrice = produit.price / 100; // variable prix pour le diviser par 100

      //j'injecte mon HTML avec les bonnes variables et mon template directement dans le DOM
      productsDOM.innerHTML += `
                <article class="product">
                    <div class="img-container" id="productImg">
                        <img src="${produit.imageUrl}" alt="${
        produit.name
      }" class="product-img" />
                    </div>
                    <h3 id="productName">${produit.name}</h3>
                    <h4 id="productPrice">${productPrice.toFixed(2)} €</h4>
                    <a href="singleProduct.html?id=${
                      produit._id
                    }"> <button class="more-info">Plus d'informations</button></a>
                </article>
                `;
    });

    console.log("youpi mes produits s'affichent !");
  })

  .catch((error) => {
    alert("Utiliser live Server ou local server");
    console.log("Hu ho y'a une erreur :/");
  });
