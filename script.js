document.querySelector("[data-theme-toggle]").addEventListener("click", (e) => {
  document.body.classList = e.target.checked ? "dark" : "light";
});
