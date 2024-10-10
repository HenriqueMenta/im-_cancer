document.getElementById("moreInfoBtn").addEventListener("click", function() {
  const moreInfoDiv = document.getElementById("moreInfo");
  if (moreInfoDiv.style.display === "none") {
      moreInfoDiv.style.display = "block";
      this.innerText = "Saiba Menos";
  } else {
      moreInfoDiv.style.display = "none";
      this.innerText = "Saiba Mais";
  }
});

