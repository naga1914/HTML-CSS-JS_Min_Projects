const count = document.querySelector(".count");
const input = document.querySelector(".form-control");

input.addEventListener("input", () => {
    count.textContent = input.value.length;
});
