export const handleSearch = (searchKeyword) => {
  const movieCard = document.querySelectorAll(".popularMovie");

  movieCard.forEach((card) => {
    const title = card.querySelector(".movieTitle").textContent.toLowerCase();
    const searchdValue = searchKeyword.toLowerCase();

    if (title.includes(searchdValue)) {
      card.computedStyleMap.display = "block";
    } else {
      card.computedStyleMap.display = "none";
    }
  });
};
