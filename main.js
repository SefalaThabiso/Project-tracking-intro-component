const navToggle = document.querySelector(".mobile-nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
  navigation.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expended", false)
    : navToggle.setAttribute("aria-expended", true);
  navigation.toggleAttribute("data-visible");
});
