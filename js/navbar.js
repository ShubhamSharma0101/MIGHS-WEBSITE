var navbarContainer = document.getElementById("navbar-container");
var navbarRequest = new XMLHttpRequest();
navbarRequest.open("GET", "navbar.html", true);
navbarRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    navbarContainer.innerHTML = this.responseText;
  }
};
navbarRequest.send();
// fetch('navbar-all.html')
// .then(res => res.text())
// .then(data => {
//   document.getElementById('navbarContainerAll').innerHTML = data;
// });