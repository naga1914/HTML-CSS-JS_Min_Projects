// varables
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal"),
        btn = document.querySelector(".btn"),
        close = document.querySelector(".close");

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    close.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

