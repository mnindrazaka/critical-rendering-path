function measureCRP() {
  var span = document.getElementsByTagName("span")[0];
  span.textContent = "interactive";
  span.style.display = "inline";

  var loadTime = document.createElement("div");
  loadTime.textContent = "You loaded this page on: " + new Date();
  loadTime.style.color = "blue";
  document.body.appendChild(loadTime);
}
