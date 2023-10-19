/*const form = document.querySelector("#form");
console.log(form)*/
const DOMSelectors = {
    button: document.getElementById("btn"),
    form: document.querySelector("#form"),
    firstName: document.querySelector(".character-name"),
    h2s: document.querySelectorAll("h2"),
    title: document.querySelector(".title"),
    random: document.querySelector(".random"),
    points:document.querySelectorAll(".point"),
}

function titleedit(headin, bruh) {
    headin.style.fontSize = "50px";
    headin.style.backgroundColor = "green";
    bruh.textContent = "This is now something";
}

DOMSelectors.button.addEventListener("click", function(){
    titleedit(DOMSelectors.title, DOMSelectors.random)
})

function changelist() {
    DOMSelectors.points.forEach((poin) => {
        poin.addEventListener("click", function() {
            poin.textContent = "hello";
        });
    });
}

changelist(DOMSelectors.points);

/*DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (el) => (el.textContent = DOMSelectors.firstName.value)
    );
})*/

//console.log(DOMSelectors.h2s);