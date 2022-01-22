let hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});

function getYear() {
    let copyrightDate = document.querySelector('.copyright-date');
    let today = new Date();
    let year = today.getFullYear();
    copyrightDate.innerHTML = year
}