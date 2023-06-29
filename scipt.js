// animation des lignes meta
  window.onload = function() {
    const lines = document.querySelectorAll('#traits');
    lines.forEach(function(line) {
    });
    
    function startAnimation() {
    lines.forEach(function(traits) {
    traits.style.animationPlayState = 'running';
    });
    }
    
    window.addEventListener('load', startAnimation);
    }

// Animation Fade

function fadeInOnScroll() {
    var elements = document.querySelectorAll('img, p');
    var windowHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset;
  
    elements.forEach(function(element) {
      var position = element.offsetTop;
      
      if (scrollPosition > position - windowHeight + 100) {
        element.style.opacity = 1;
      }
    });
  }
  
  function fadeLeftOnScroll() {
    var elements = document.querySelectorAll('h2, h3, li');
    var windowHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset;
  
    elements.forEach(function(element) {
      var position = element.offsetTop;
      
      if (scrollPosition > position - windowHeight + 100) {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
      }
    });
  }
  
  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('scroll', fadeLeftOnScroll);

  // Appel du popup

// Récupération des éléments HTML
const form = document.querySelector('form');
const envoyer = document.querySelector('#envoyer');
const popup = document.querySelector('#popup');
const revenir = document.querySelector('#revenir');
const counter = document.querySelector('.counter');

// affiche le popup
function afficherPopup() {
popup.style.display = 'flex';
}

// ferme le popup
function fermerPopup() {
popup.style.display = 'none';
}

// incrémenter le compteur de temps
function incrementerCompteur() {
let heures = 0;
let minutes = 0;
let secondes = 0;
setInterval(() => {
secondes++;
secondesColor = '#f2cef2';
if (secondes === 60) {
secondes = 0;
minutes++;
}
if (minutes === 60) {
minutes = 0;
heures++;
}
counter.textContent = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
}, 1000);
}

// verifie les formulaires
function showPopup(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name !== "" && email !== "") {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
  incrementerCompteur();}
  else {
    alert('Il faut remplir les formulaires avant de continuer');
    }
  }

// clic sur le bouton "revenir"
revenir.addEventListener('click', () => {
fermerPopup();
});

// interchangement des enygmes

function validateEnygme1() {
  var codemorse = document.getElementById("codemorse").value;
  if (codemorse == "") {
  alert("Veuillez repondre aux Enygmes !");
  } else {
  document.getElementById("enygme1").style.display = "none";
  document.getElementById("enygme2").style.display = "block";
  }
  }
  
  function validateEnygme2() {
  var alphabeta = document.getElementById("alphabeta").value;
  if (alphabeta == "") {
    alert("Veuillez repondre aux Enygmes !");
  } else {
  document.getElementById("enygme2").style.display = "none";
  document.getElementById("enygme3").style.display = "block";
  }
  }
  
  function validateEnygme3() {
  var codeboolean = document.getElementById("codeboolean").value;
  if (codeboolean == "") {
    alert("Veuillez repondre aux Enygmes !");
  } else {
  document.getElementById("enygme3").style.display = "none";
  document.getElementById("popup").style.display = "flex";
  incrementerCompteur();
  }
  }
