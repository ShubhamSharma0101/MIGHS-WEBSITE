var footercontainer = document.getElementById("footer-container");
var footerRequest = new XMLHttpRequest();
footerRequest.open("GET", "footer.html", true);
footerRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    footercontainer.innerHTML = this.responseText;
  }
};
footerRequest.send();