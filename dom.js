/*const form = document.querySelector("#form");
console.log(form)*/
const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".character-name"),
    h2s: document.querySelectorAll("h2"),
    title: document.querySelector(".title"),
    random: document.querySelector(".random"),
}

function titleedit(headin, bruh) {
    headin.style.fontSize = "50px";
    headin.style.backgroundColor = "green";
    bruh.innerHTML = "This is now something";
}

titleedit(DOMSelectors.title, DOMSelectors.random);

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el) => (el.textContent = DOMSelectors.firstName.value)
    );
})

//console.log(DOMSelectors.h2s);