const inHtml = document.getElementById("orderNum");
const params = new URLSearchParams(window.location.search);
const inHtmlName = document.getElementById("customerName");

//je récupère mon numéro de commande
const numCommande = params.get("ncomm");

inHtml.innerHTML = numCommande;

localStorage.clear(); // on vide le local storage
