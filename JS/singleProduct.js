const singleProductDOM = document.querySelector(".product-container");
const singleProduct = new URLSearchParams(window.location.search);
let productUnitPrice = data.price / 100; // prix produit unitaire divisé par 100
let varnish = ""; // variable qui est vide et qui va nous permettre de créer le "select" du "form" en html pour que le client puisse sélectionner son vernis

// Je fais requete avec l'URL de mon produit avec son id
fetch("http://localhost:3000/api/furniture/${singleProduct.get('id')}")
    .then(
        (response) => {
            if (response.ok) {
                return (data = response.json());
            } else {
                Promise.reject(response.status);
            }
        }
    );
.then(data => {
data.allVarnish.forEach(vernis => {
    varnish += `<option value ="${vernis}">${vernis}</option>`});
});

// Ajout du template avec innerHTML : 
singleProductDOM.innerHTML += `
`