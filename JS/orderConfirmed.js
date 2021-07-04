localStorage.clear();

const jsonOrderInfos =
const inHtml = document.getElementById("orderNum");
const params = new URLSearchParams(window.location.search);

//je récupère mon numéro de commande
const numCommande = params.get("ncomm");

inHtml.innerHTML = numCommande;
