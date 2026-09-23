const quickAccessBtn = document.getElementById("quick-access-btn");
const quickAccessContainer = document.getElementById("quick-access-container");

quickAccessBtn.addEventListener("click", () => {
    quickAccessContainer.classList.toggle("show");
    quickAccessBtn.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    const isClickInsideMenu = quickAccessContainer.contains(e.target);
    const isClickOnButton = quickAccessBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        quickAccessContainer.classList.remove("show");
        quickAccessBtn.classList.remove("show");
    }
});