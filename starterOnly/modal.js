function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalvalidation = document.querySelector(".validation");
const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.querySelector('.btn-submit')
const formData = document.querySelector(".formData");
const modalClose = document.querySelector(".close");
const closeCroixValidation = document.querySelector(".close-validation")
const modalBtnFermerValidation = document.querySelector(".btn-fermer-validation");

// DOML Elements Errors
const firstnameError = document.querySelector(".firstname");
const lastnameError = document.querySelector(".lastname");
const mailError = document.querySelector(".mailError");
const dateDeNaissanceError = document.querySelector(".dateDeNaissance");
const nbTournoiError = document.querySelector(".nbTournoiError");
const radiosError =  document.querySelector(".radiosError");
const conditionGeneraleError = document.querySelector(".conditionGeneraleError");


const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateChoice = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radios = document.querySelectorAll(".villes");
const conditionGenerale = document.getElementById("checkbox1");




// launch modal event
modalBtn.forEach(btn => btn.addEventListener("click",launchModal));
modalClose.addEventListener("click", closeModal);
closeCroixValidation.addEventListener("click",closeInscription);
modalBtnFermerValidation.addEventListener("click",closeInscription);
firstNameInput.addEventListener("input", validePrenom);
lastNameInput.addEventListener("input", valideNom);
birthDateChoice.addEventListener("input", valideDate);
quantityInput.addEventListener("input", valideQuantite);
emailInput.addEventListener('input', valideEmail);
conditionGenerale.addEventListener("input", cgu);
submitBtn.addEventListener("click", validate);
radios.forEach(radio => radio.addEventListener('input',valideVille));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// fermer modal form à la croix
function closeModal() {
  modalbg.style.display = "none";
}

//fermer Inscription
function closeInscription() {
  modalvalidation.style.display="none";

}


// validation inscrip^tion
function launchInscription() {
  closeModal();
  modalvalidation.style.display = "block";
}


// verifie que le champ Prénom est en alphabet avec minimum 2 caractère et max 20
function validePrenom() {
  if (/^([a-zA-Z]{2,20}$)/.test(firstNameInput.value)) {
    firstnameError.setAttribute('data-error-visible', false);
    return true;
    
  }
  else {
    firstnameError.setAttribute('data-error-visible', true);
    return false;
  }
}


// verifie que le champ Nom est en alphabet avec minimum 2 caractère et max 20
function valideNom() {
  if (/^([a-zA-Z]{2,20}$)/.test(lastNameInput.value)) {
    lastnameError.setAttribute('data-error-visible', false);
    return true;
  }
  else {
    lastnameError.setAttribute('data-error-visible', true);
    return false;
  }
}


// verifie que le champ Email  est une adresse valide
function valideEmail() {
  if (/^[a-z0-9._-]+@{1}[a-z0-9.-_]{2,}[.]{1}[a-z]{2,5}$/.test(emailInput.value)) {
    mailError.setAttribute('data-error-visible', false);
    return true;
  }
  else {
    mailError.setAttribute('data-error-visible', true);
    return false;
  }
}




// verifie que le champ date anniversaire  est une date selectionne
function valideDate() {
  if (!birthDateChoice.value == "") {
    dateDeNaissanceError.setAttribute('data-error-visible', false);
    return true;
  }
  else {
    dateDeNaissanceError.setAttribute('data-error-visible', true);
    return false;
  }
}
// combien de tournoi 
function valideQuantite() {
  if (/^([1-9]{0,1}[0-9]$)/.test(quantityInput.value) &&
    quantityInput.value >= 0 && quantityInput.value < 100 && !quantity.value == "") {
    nbTournoiError.setAttribute('data-error-visible', false);
    return true;

  }
  else {
    nbTournoiError.setAttribute('data-error-visible', true);
    return false;
  }
}

// a quel tournoi de participation
function valideVille(){
  let checked = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checked = true;
      break;
    }
  }
  if(checked) {
    radiosError.setAttribute('data-error-visible', false);
    return true;
  } else {
    radiosError.setAttribute('data-error-visible', true);
    return false;
  }
}


// vérifie  que le les conditions générales soient accéptées
function cgu() {
  if (conditionGenerale.checked == true) {
    conditionGeneraleError.setAttribute('data-error-visible', false);
    return true;
  }
  else {
    conditionGeneraleError.setAttribute('data-error-visible', true);
    return false;
  }
}


// bouton submit (c'est parti)
function validate(e) {
  e.preventDefault();
   
    if (validePrenom() & valideNom() & valideEmail() & valideDate() & valideQuantite() & valideVille() & cgu()) {
      launchInscription(); 
 
    }
}

  






