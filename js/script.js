h1, h2, h3, h4 {
  font-family: Georgia, serif;
  font-weight: bold;
}
#Toc-Title {
    font-size: 5em;
    color: #FF9800;
    text-align: center;
}

[role="note"] {
  font-family: Georgia, serif;
  font-weight: normal;
}

blockquote {
  font-family: Georgia, serif;
  font-style: italic;
}

a[role="button"],
input[type="submit"],
input[type="reset"],
button {
  font-family: Arial, sans-serif;
  font-weight: normal;
}

h5, h6, dl dt {
  font-family: Georgia, serif;
  font-style: italic;
}


/* Style pour les instructions */
.instructions {
  font-family: Arial, sans-serif;
  font-size: 1.1em;
  color: #333;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* Style pour les instructions en mode dark */
body.dark-mode .instructions {
  color: #ddd;
}


/* Style pour les notes */
.notes {
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 1.1em;
  color: #666;
  line-height: 1.5;
  margin-top: 10px;
}

/* Style pour les notes en mode dark */
body.dark-mode .notes {
  color: #bbb;
}

/* Style pour le code dans les instructions */
.instructions code {
  font-family: Consolas, monospace;
  font-size: 0.9em;
  color: #feb32b;
  background-color: #f8f8f8;
  padding: 2px 4px;
  border-radius: 3px;
  margin: 0 2px;
  word-break: break-all;
}

/* Style pour le code dans les instructions en mode dark */
body.dark-mode .instructions code {
  font-family: Consolas, monospace;
  font-size: 0.9em;
  color: #feb32b;
  background-color: #333;
  padding: 2px 4px;
  border-radius: 3px;
  margin: 0 2px;
  word-break: break-all;
}


/* HEADER */
header{
  position: fixed;
  background: #fff;
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index:99;
}
header .header-logo{
  text-align: center;
  margin-top: 10px;
  padding-left: 10px;
  float: left;
}
header .header-brand{
  font-family: Catamaran;
  font-size: 24px;
  font-weight: 900;
  color: #111;
  text-transform: uppercase;
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  margin: 31px 0;
  text-align: left;
  line-height: 38px;
  border-right: 3px solid #111;
  padding: 0 20px 0 5px;
  float: left;
}
header .header-brand:hover{
  text-decoration: none;
}
header nav ul{
  display: flex;
  padding: 0;
  margin: 20px 0px 0px 20px;
  float: left;
}
header nav ul li{
  list-style: none;
  padding: 0 16px;
  line-height: 60px;
}
header nav ul li a{
  font-family: Catamaran;
  font-size: 20px;
  color: #111;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
}
header nav ul li:hover,
header nav ul li:hover a{
  text-decoration: none;
  color: #fff;
  background-color: #333;
  line-height: 60px;
  text-decoration: none;
}
.menu-toggle{
  color: #111;
  float: right;
  line-height: 50px;
  font-size: 24px;
  cursor: pointer;
  padding-top: 20px;
  display: none;
}


/* DROPDOWN */
.dropbtn {
    display: block;
    font-family: Catamaran;
    background-color: #fff;
    color: #111;
    padding: 18px;
    font-size: 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    line-height: 50px;
    width: 250px;
}
.dropdown {
    position: left;
    display: block;
    float: right;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 250px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    right: 0;
    left: auto;
}
.dropdown-content a {
    font-size: 20px;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    text-align: center;
    display: block;
}
.dropdown-content a:hover {
  text-decoration: none;
  color: #fff;
  background-color: #333;
}
.dropdown:hover .dropdown-content {
    display: block;
}
.dropdown:hover .dropbtn {
    color: #fff;
    background-color: #333;
}
@media (max-width: 1200px) {
  .dropdown
  {
    display: none;
  }
}
@media (max-width: 1000px) {
  header
  {
    padding: 0;
  }
  .menu-toggle
  {
    display: block;
    padding: 25px 20px;
  }
  header nav
  {
    float: right;
    position: absolute;
    width: 100%;
    height: calc(300vh - 50px);
    background: #fff;
    opacity: 0.8;
    top: 90px;
    left: -100%;
    transition: 0.5s;
  }
  header nav.active
  {
    left: 0;
  }
  header nav ul
  {
    text-align: center;
    display: block;
    position: absolute;
    left: 48%;
    transform: translatex(-50%);
  }
  header nav ul li {
    text-align: center;
  }
  header nav ul li a{
    font-size: 35px;
  }
  header nav ul li:hover,
  header nav ul li:hover a{
    color: #000;
    background-color: transparent !important;
    font-weight: 900;
  }
}
body.dark-mode header {
  background-color: #444;
  color: #fff;
}


/* Code snippet */
body.dark-mode pre {
  background-color: #444; 
  color: #fff; 
}
/* Liste déroulante */
body.dark-mode .select {
  background-color: #444; 
  color: #fff; 
}
body.dark-mode header nav ul li a {
  color: #fff;  
}
body.dark-mode .dropdown-header{
  background-color: #444; 
  color: #fff; 
}
body.dark-mode .header-brand {
  border-right: 3px solid #fff;
  color: #fff;
}
body.dark-mode .dropbtn{
  background-color: #444; 
  color: #fff;
}


/* TABLE OF CONTENTS */
.toc {
  text-align: center;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 3em;
}
.toc h1 {
  font-family: 'Georgia', serif;
  font-weight: 700;
  font-style: normal;
  font-size: 36px;
  color: #333;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}
.toc hr {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 3em;
  width: 30%;
}
.toc ol {
  list-style: none;

  margin: 0;
}

.toc ol li {
  font-family: 'merriweather-regular';
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  color: #333;
  /*margin-bottom: 10px;*/
  text-align: left;
  white-space: nowrap;
}

.toc ol li a {
  color: #333;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
}
.toc ol li a:hover {
  color: #fff;
  background-color: #333;
  border-radius: 5px;
}


.my-toc {
    display: inline-block;
    text-align: left;
    width: 500px;
    margin: 0 auto;
}


.my-toc ol ol {
  margin-left: 20px;
}

.my-toc a {
  text-decoration: none;
}

.my-toc li h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-left: -20px;     
  white-space: normal;
}

.my-toc li li a {
  font-size: 1.2em;
  font-weight: normal;
}

.toc hr:nth-of-type(2) {
  margin-bottom: 0em;
  width: 20%;
}

/* Dark mode styles for TOC */
body.dark-mode .toc ol li {
  color: #fff;
}
body.dark-mode .toc ol li a {
  color: #fff;
}
body.dark-mode .toc ol li a:hover {
  background-color: #fff;
  color: #333;
}
.my-toc ol li a {
  width: auto;
}


/* Code Container and Explanation */
.code-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  overflow: visible;
}
pre {
  /*width: 80%;*/
  margin: 0 auto; 
}
.code-container h2 {
  text-align: left;
  width: 100%;
  font-size: 36px;
  font-weight: 900;
  color: #FF9800;
}
/* Dark mode styles for code container */
body.dark-mode pre {
  background-color: #333;
  color: #fff;
}

/* Dark mode styles for code container title */
body.dark-mode .code-container h2 {
  color: #FF9800;
}
/* Collapsible */
.collapsible {
  border: none;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-out;
  width: 100%;
  min-width: 80%;
  box-sizing: border-box;
}

/* En mode sombre, on change la couleur de l'ombre en blanc */
body.dark-mode .collapsible {
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.2);
}

.collapsible.active {
  /*transform: scale(1.05);*/
  transform: scaleY(1.05);
  transform: scaleX(1.05);
}


.collapsible.active .collapsible-header {
  background-color: #333;
  color: #fff;
}


.collapsible:hover .collapsible-header {
  background-color: #333;
  color: #fff;
}

.collapsible-header {
  background-color: #fff;
  color: #333;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-family: Georgia, serif;
  font-size: 24px;
  font-weight: bold;
}

.collapsible-header:hover {
  background-color: #ddd;
}

.collapsible-header::after {
  content: '\002B';
  color: #333;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.collapsible-content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  position: relative;
  z-index: 1;
}

.collapsible-content.show {
  max-height: 500px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}


body.dark-mode .collapsible-content.show {
  box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.2);
}

.collapsible-content.show + .collapsible-header::after {
  content: "\2212";
}

.collapsible.active .collapsible-content {
  max-height: 500px;
}

.collapsible.active .collapsible-header::after {
  content: "\2212";
  color: #fff;
}

.collapsible:hover .collapsible-header::after {
  color: #fff;
}

body.dark-mode .collapsible-content {
  background-color: #444;
}

body.dark-mode footer {
  background-color: #444;
}

.collapsible-content .card.truthTable {
  width: 50%;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: #444;
  color: #fff;
}

.collapsible-content .card.truthTable th,
.collapsible-content .card.truthTable td {
  padding: 12px;
  text-align: center;
  border: 1px solid #666;
}

.collapsible-content .card.truthTable th {
  background-color: #333;
  font-weight: normal;
}




/* Back to top Button */
#button {
  display: inline-block;
  background-color: #fff;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50%; 
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s, opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  line-height: 50px; 
  text-decoration: none; 
}
#button::after {
  content: "\f077";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 20px; 
  line-height: 50px; 
  color: #000; 
}
#button:hover {
  cursor: pointer;
  background-color: #333; 
}
#button:hover::after {
  color: #fff; 
}
#button:active {
  background-color: #555;
}
#button.show {
  opacity: 1;
  visibility: visible;
}



/* TOGGLE SWITCH */

/* Default/light mode styles */
body {
  background-color: #fff;
  color: #333;
}

/* Dark mode styles */
body.dark-mode {
  background-color: #333;
  color: #fff;
}

/* Toggle switch styles */
.switch {
  position: relative;
  display: block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
}
.toggle-switch-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px; 
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%; 
}
input:checked + .slider {
  background-color: #333;
}
input:focus + .slider {
  box-shadow: 0 0 1px #333;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


/* FOOTER */
footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}
footer p {
  margin-bottom: 20px;
  font-size: 18px;
}
footer .social-links {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
footer .social-links li {
  margin: 0 10px;
}
footer .social-links a {
  color: #fff;
  font-size: 24px;
  transition: color .3s;
}
footer .social-links a:hover {
  color: #FF9800;
}


/* Construction Page */
.under-construction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
}

.under-construction-container h1 {
  font-size: 2.5em;
  font-weight: bold;
  color: #FF9800;
  margin: 0;
}

.under-construction-container p {
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
  text-align: center;
}

voici mon js :
document.addEventListener("DOMContentLoaded", function() {
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach(collapsible => {
    collapsible.querySelector('.collapsible-header').addEventListener('click', function() {
      // Fermer tous les autres collapsibles
      collapsibles.forEach(otherCollapsible => {
        if (otherCollapsible !== collapsible) {
          otherCollapsible.classList.remove('active');
          otherCollapsible.querySelector('.collapsible-content').style.maxHeight = null;
        }
      });

      // Basculer l'état actif du collapsible actuel
      collapsible.classList.toggle('active');
      const content = collapsible.querySelector('.collapsible-content');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  const btn = document.querySelector('#button');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // TOGGLE SWITCH
  const darkModeSwitch = document.querySelector('#darkModeSwitch');

  // Vérifier si le mode sombre est activé dans localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Si le mode sombre est activé, activer le switch et ajouter la classe dark-mode au body
  if (isDarkMode) {
    darkModeSwitch.checked = true;
    document.body.classList.add('dark-mode');
  }

  darkModeSwitch.addEventListener('change', function() {
    // Basculer la classe dark-mode sur le body
    document.body.classList.toggle('dark-mode');

    // Stocker l'état du mode sombre dans localStorage
    localStorage.setItem('darkMode', darkModeSwitch.checked);
  });

  // Enregistrer l'état du mode sombre dans localStorage avant que la page ne soit déchargée
  window.addEventListener('beforeunload', function() {
    localStorage.setItem('darkMode', darkModeSwitch.checked);
  });

});
