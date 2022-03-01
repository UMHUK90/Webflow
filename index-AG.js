const privateCircle = document.querySelector(".locked-pane");
const activeLink = document.querySelector('a.nav-link--active span.space__name');

function changeVisibility() {
    if (privateCircle !== null) {
        activeLink.style.setProperty("--lock-icon-visibility", "visible");
      } else {
        activeLink.style.setProperty("--lock-icon-visibility", "hidden");
  }
}
window.setTimeout(() => {
  changeVisibility();
}, 2000);
