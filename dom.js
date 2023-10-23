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

function makeAlbum() {

}
function addCard(Album) {
    //insertAdjacentHTML() look up
    //backticks allow u to input a string and insert variable in adjacent
    // html using ${} ex(Album.name) use .value after domselector variable name
}

function titleedit(headin, bruh) {
    headin.style.fontSize = "50px";
    headin.style.backgroundColor = "green";
    bruh.textContent = "This is now something";
}

DOMSelectors.button.addEventListener("click", function(){
    titleedit(DOMSelectors.title, DOMSelectors.random)
    /*const album = makealbum()
    addCard()
    clearfields()
    addremovebuttons*/
})


function changelist() {
    let pointbruh = 2;
    DOMSelectors.points.forEach((poin) => {
        poin.addEventListener("click", function() {
            poin.textContent = `hello ${pointbruh}`;
            pointbruh++;
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