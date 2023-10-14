const searchInput = document.getElementById("search");
const images = document.querySelectorAll("a");


searchInput.addEventListener("keyup", (event) => {
  const searchTerm = searchInput.value.toLowerCase();
  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const imageCaption = image.getAttribute("data-caption");

    if (imageCaption.toLowerCase().indexOf(searchTerm) === -1) {
      image.style.display = "none";
    } else {
      image.style.display = "block";
    }
  }
});
