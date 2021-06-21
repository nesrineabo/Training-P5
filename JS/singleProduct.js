const singleProductDOM = document.querySelector(".product-container");
const params = new URLSearchParams(window.location.search);

const btnSPCard = document.querySelector(".addToCart"); // cste bouton "ajouter au panier"

// Je fais requete avec l'URL de mon produit avec son id
fetch(`http://localhost:3000/api/furniture/${params.get("id")}`)
  .then((response) => {
    // ça me renvoit une 1ère promesse
    if (response.ok) {
      return response.json(); // si la réponse est ok, me retourne un objet JSON
    } else {
      Promise.reject(response.status); // me retourne la cause de l'échec
    }
  })

  .then((product) => {
    // si response ok, renvoie d'une seconde promesse
    let productUnitPrice = product.price / 100; // prix produit unitaire divisé par 100
    let varnish = ""; // variable qui est vide et qui va nous permettre de créer le "select" du "form" en html pour que le client puisse sélectionner le vernis du produit

    // product.allVarnish.forEach((vernis) => {
    //   varnish += `<option value ="${vernis}">${vernis}</option>`;
    // });

    // Ajout du template avec innerHTML :
    singleProductDOM.innerHTML += `
    <div class="left">
        <div class="product-img">
            <img src="${product.imageUrl}" class="product-img__single" alt="${product.name}">
        </div>
    </div>

    <div class="right">
        <h2 class="product-details__title">${product.name}</h2>
        <p class="product-details__description">${product.description}</p>

        <form>
            <label for="productQty">Quantité : </label>
            <input type="number" id="productQty" min="1" value="1">
            <div class="varnishSelection">
                <label for="customSelection">Vernis : </label>
                <select id="customSelection">${varnish}</select>
            </div>

            <p class="product-details__price">Prix : <span class="prix">${productUnitPrice}</span> €</p>
            <button class="addToCart">Ajouter au panier</button>
        </form>
    </div>`;

    //--appel la fonction de calcul pour le prix total
    calculePrice(productUnitPrice);

    // //On écoute un évènement au clic sur ajouter au panier qui ajoutera le produit dans notre LocalStorage
    // btnSPCard.addEventListener("click", () => {
    //   addLocalStorage();
    // });

    // // Création de la fonction addLocalStorage : stocke les données dans un objet
    // function addLocalStorage() {
    //   const varnishElt = document.getElementById("customSelection");
    //   const quantityElt = document.getElementById("productQty");

    //   let productObj = {
    //     _id: product._id,
    //     image: product.imageUrl,
    //     name: product.name,
    //     varnish: varnishElt.nodeValue,
    //     quantity: quantityElt.nodeValue,
    //     totalPrice: (product.price * parseInt(quantityElt.value)) / 100,
    //     price: product.price / 100,
    //   };

    //   // On ajoute au local Storage qu'on vient de créer

    //   let cartFill = JSON.parse(localStorage.getItem("basket"));

    //   // Si je n'ai pas de panier

    //   if (!cartFill) {
    //     let cartFill = [];
    //     cartFill.push(productObj);
    //     localStorage.setItem("basket", JSON.stringify(cartFill));
    //     window.location.href = "cart.html";
    //   } else if (!cartFill.some((p) => p._id === productObj._id)) {
    //     // vérification : si je n'ai pas déjà mon objet dans mon panier avant l'ajout
    //     cartFill.push(productObj);
    //     localStorage.setItem("basket", JSON.stringify(cartFill));
    //   } else {
    //     // Sinon j'enlève celui qui y est déjà et je remplace avec la nouvelle quantité
    //     const newCart = cartFill.filter((p) => p._id !== productObj._id);
    //     newCart.push(productObj);
    //     localStorage.setItem("basket", JSON.stringify(newCart));
    //   }
    // }
  });

// Création de la fonction qui calcule le prix en fonction de la quantité sélectionnée
function calculePrice(productUnitPrice) {
  let quantities = document.getElementById("productQty");
  quantities.addEventListener("change", (e) => {
    const result = document.getElementById("totalPrice");
    result.textContent = `${productUnitPrice}` * `${e.target.value}`;
    console.log(e.target);
  });
}
