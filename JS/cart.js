const itemDOM = document.querySelector(".cart-container");
const priceDOM = document.getElementById("prixTotal");
const btnOrder = document.getElementById("confirmPurchase");
let items = JSON.parse(localStorage.getItem("basket"));
// let productUnitPrice = product.price / 100; // prix produit unitaire divisé par 100

if (localStorage.length > 0) {
  priceDOM.innerHTML = "Total à payer : " + calculCart() + " €";
  items.forEach((product) => {
    itemDOM.innerHTML += `
        <div class="cart-item">
            <div class="cart-remove">
                <button class="btn-remove" onclick="deleteItem('${product._id}')"><i class="fas fa-times"></i></button>
            </div>

            <div class="cart-thumbnail">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="cart-description">
                <h4>${product.name}</h4>
                <span>${product.varnish}</span>
            </div>

            <div class="cart-quantity">
                <span class="minus-btn bouton">
                    <i class="fas fa-minus"></i>
                </span>
                <input id="productQty${product._id}" type="text" name="name" value="1" min="1">
                <span class="plus-btn bouton">
                    <i class="fas fa-plus"></i>
                </span>
            </div>

            <div class="cart-total">
            <p class="cart-total_text" >Prix : <span id="totalPrice">${product.totalPrice}</span> €</p>
            </div>
        </div>  
        `;
  });
} else {
  itemDOM.innerHTML = `
    <div class="empty-cart">
        <p class="empty-cart_text">Votre panier est vide ...</p>
    </div>`;
}

// Suppression d'un produit

function deleteItem(_id) {
  const localStorageUpdate = items.filter((product) => product._id !== _id);
  localStorage.setItem("basket", JSON.stringify(localStorageUpdate));

  if (localStorageUpdate == 0) {
    localStorage.clear();
  }
  document.location.href = "cart.html";
}

//Calcul prix total panier

function calculCart() {
  let totalPriceItem = items.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);

  return totalPriceItem;
  // let quantities = document.getElementById("productQty");

  // quantities.addEventListener("change", (e) => {
  //   const result = document.getElementById("totalPrice");
  //   result.textContent = `${productUnitPrice}` * `${e.target.value}`;
  //   console.log(e.target.value); // On voit bien la quantité sélectionnée
  //   console.log(result.textContent); // On voit le prix total (prix unitaire x qté)
  // });
}

// ------------ Validation du Formulaire ----------

const lastname = document.getElementById("nom");
const firstname = document.getElementById("prenom");
const address = document.getElementById("adresse");
const zipcode = document.getElementById("zipcode");
const city = document.getElementById("ville");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const form = document.querySelector("#submitForm");

// ------------- Envoi des données au backend --------

// fonction envoi au backend

form.addEventListener("click", (e) => {
  // e.preventDefault();

  const contact = {
    firstName: firstname.value,
    lastName: lastname.value,
    address: address.value,
    zipcode: zipcode.value,
    city: city.value,
    phone: phone.value,
    email: email.value,
  };

  // const name = firstname.value;

  console.log(contact);

  const products = []; //Meubles en tableau à envoyer en POST

  product.forEach((furniture) => {
    products.push(furniture._id);
  });

  const donnees = { contact, products }; //Création de données comme objet contact + tableau des produits
  console.log(donnees);

  //En-tête de requête : en POST et pas GET
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(donnees),
  //   headers: { "Content-Type": "application/json" },
  // };

  // if (
  //   firstname == "" ||
  //   lastname == "" ||
  //   address == "" ||
  //   city == "" ||
  //   email == ""
  // ) {
  //   alert("Veuillez remplir tous les champs avant de valider votre commande.");
  // } else {
  //   // la requete POST en elle-même
  //   fetch("http://localhost:3000/api/furniture/order", options)
  //     // reçoit les données du backend
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         Promise.reject(response.status);
  //       }
  //     })

  //     // TTT pour l'obtetion du numéro de commande
  //     .then((datas) => {
  //       const orderId = datas.orderId;

  //       window.location.href = `orderConfirmed.html?ncomm=${orderId}`;
  //     })

  //     .catch((error) => {
  //       alert(error);
  //     });
  // }
});
